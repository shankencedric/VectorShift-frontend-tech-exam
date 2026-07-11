// flexibleTextArea.js

import { useEffect, useRef } from 'react';

/**
 * FlexibleTextArea Component
 * 
 * A smart HTML `<textarea>` wrapper designed for nodes. 
 * Features automatic height scaling based on text volume, hides browser-native manual resize elements, 
 * and can detect template variable tags wrapped in double curly brackets (see example implementation below).
 * 
 * @component
 * @param {Object} props
 * @param {string} props.value - The current text state controlled by the parent component.
 * @param {Function} props.onChange - Callback triggered when text content changes. Expects the setter function for the text/value.
 * @param {Function} [props.onVariablesChange] - Optional callback triggered whenever the unique set of template variables shifts. Expects the setter function for the user defined variables.
 * @param {number} [props.rows=1] 
 * @param {string} [props.placeholder="Enter text here..."]
 * 
 * @example 
 * // Example snippet that implements user-defined variables.
 * 
 * export const MyCustomNode = ({ id, data, selected }) => {
 *   const [dynamicVariables, setDynamicVariables] = useState([]); // Addition 1 - reactive state definition
 * 
 *   const body = (
 *     // ...
 *     <FlexibleTextArea
 *       // ...
 *       onVariablesChange={setDynamicVariables} // Addition 2 - pass in the setter function
 *     />
 *     // ...
 *   );
 *   return (
 *     <NodeBase
 *       // ...
 *       data={{
 *         // ...
 *         dynamicVariables: dynamicVariables // Addition 3 - pass in the reactive state
 *       }}
 *     />
 *   );
 * };
 */
export const FlexibleTextArea = ({ value: text, onChange: setText, onVariablesChange, rows = 1, placeholder = "Enter text here..." }) => {
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    // For auto-resizing
    const textareaRef = useRef(null);
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [text]);

    // For parsing custom user variables
    useEffect(() => {
        if (!onVariablesChange) return;

        const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
        const found = [];
        let match;

        while ((match = regex.exec(text || '')) !== null) {
            if (!found.includes(match[1]))
                found.push(match[1]);
        }

        onVariablesChange(found);
    }, [text, onVariablesChange]);

    return (
        <textarea
          ref={textareaRef}
          value={text} 
          onChange={handleTextChange} 
          rows={rows}
          className="p-0.5 resize-none overflow-hidden"
          placeholder={placeholder}
        />
    );
}
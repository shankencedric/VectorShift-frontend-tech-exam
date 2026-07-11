// flexibleTextArea.js

import { useEffect, useRef } from 'react';

/**
 * FlexibleTextArea Component
 * 
 * A smart HTML `<textarea>` wrapper designed for nodes. 
 * Features automatic height scaling based on text volume and hides browser-native manual resize elements.
 * 
 * @component
 * @param {Object} props
 * @param {string} props.value - The current text state controlled by the parent component.
 * @param {Function} props.onChange - Callback triggered when text content changes. Expects the setter function for the text.
 * @param {number} [props.rows=1] 
 * @param {string} [props.placeholder="Enter text here..."]
 */
export const FlexibleTextArea = ({ value: text, onChange: setText, rows = 1, placeholder = "Enter text here..." }) => {
    
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
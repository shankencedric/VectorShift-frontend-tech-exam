import { useEffect } from 'react';

/**
 * Custom React hook that detects template variable names from a text string.
 *
 * This hook acts as a shared, reusable engine that scans a string for JavaScript
 * variable names wrapped in double curly brackets (e.g., `{{myVariable_$12}}`). It safely
 * ignores duplicate matches and passes an array of clean string tokens back to the parent.
 *
 * @hook
 * @param {string} text - The current raw text string to scan for template brackets.
 * @param {Function} [onVariablesChange] - Callback triggered whenever the set of discovered variables shifts. Expects the setter function for the reactive array of custom inputs.
 * 
 * @example
 * export const DynamicInputText = () => {
 *   const [text, setText] = useState('');
 *   const [customInputs, setCustomInputs] = useState([]);
 *   useVariableParser(text, setCustomInputs);
 * 
 *   return (
 *     <NodeBase
 *       id={id}
 *       data={{
 *         // ...
 *         dynamicVariables: dynamicVariables
 *     }}/> 
 *   );
 * };
 */
export const useVariableParser = (text, onVariablesChange) => {
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
}
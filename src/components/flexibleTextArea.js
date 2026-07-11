// flexibleTextArea.js

import { useEffect, useRef } from 'react';

export const FlexibleTextArea = ({ value: text, onChange: setText, rows = 1 }) => {
    
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
          placeholder="Enter your comment here..."
        />
    );
}
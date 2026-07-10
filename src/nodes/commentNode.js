// commentNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';

export const CommentNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const body = 
    <div>
        <label>
          /*
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
          */
        </label>
      </div>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Comment',
        body: body,
        inputHandles: null,
        outputHandles: null
      }}
    />
  );
}

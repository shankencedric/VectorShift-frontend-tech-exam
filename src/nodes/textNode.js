// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase } from '../components/nodeBase';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const body = 
    <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Text',
        body: body,
        inputHandles: null,
        outputHandles: [{id: `output`}]
      }}
    />
  );
}

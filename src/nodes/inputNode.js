// inputNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const body = 
    <div>
      <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Input',
        body: body,
        inputHandles: null,
        outputHandles: [ `value` ]
      }}
    />
  );
}
// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase } from '../components/nodeBase';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
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
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </div>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Output',
        body: body,
        inputHandles: [{id: `value`}],
        outputHandles: null
      }}
    />
  );
}

// outputNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';

export const OutputNode = ({ id, data, selected }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const body = 
    <>
      <label>
        Name
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
        />
      </label>
      <label>
        Type
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Output',
        body: body,
        inputHandles: [ `value` ],
        outputHandles: null
      }}
      selected={selected}
    />
  );
}

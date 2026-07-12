// inputNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';
import { useVariableParser } from '../hooks/useVariableParser'

export const InputNode = ({ id, data, selected }) => {
  const [currName, setCurrName] = useState(data?.inputName || `{{${id.replace('customInput-', 'input_')}}}`);
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  const dynamicVariables = useVariableParser(id, currName);

  const handleNameChange = (e) => { setCurrName(e.target.value); };
  const handleTypeChange = (e) => { setInputType(e.target.value); };

  const body = 
    <>
      <label>
        Name
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          placeholder="Type name or {{varName}} here..."
        />
      </label>
      <label>
        Type
        <select 
          value={inputType} 
          onChange={handleTypeChange} 
          >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Input',
        body: body,
        inputHandles: null,
        outputHandles: [ `value` ],
        dynamicVariables: dynamicVariables
      }}
      selected={selected}
    />
  );
}
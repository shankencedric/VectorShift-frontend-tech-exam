// flexNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';

export const FlexNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'Type anything here...');
  const [selectionType, setSelectionType] = useState(data?.selectionType || 'Select an option...');

  const handleTextChange = (e) => setCurrText(e.target.value);
  const handleTypeChange = (e) => setSelectionType(e.target.value);

  const body = (
    <div>
      <label>
        You can type here:
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
        />
      </label>

      <label>
        You can select an option here:
        <select 
          value={selectionType} 
          onChange={handleTypeChange}
        >
          <option value="selA">Selection A</option>
          <option value="selB">Selection B</option>
          <option value="selC">Selection C</option>
          <option value="selD">Selection D</option>
          <option value="selE">Selection E</option>
        </select>
      </label>
      
      <label>
        You can attach things here:
        <input type="file" />
      </label>
    </div>
  );

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Flex',
        body: body,
        inputHandles: [ `value`, `value`, `value` ], 
        outputHandles: [ `value`, `value`, `value`, `value`, `value` ]
      }}
    />
  );
};
// flexNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';
import { useVariableParser } from '../hooks/useVariableParser'

export const FlexNode = ({ id, data, selected }) => {
  const [customInputs, setCustomInputs] = useState(data?.customInputs || '');
  const [currText, setCurrText] = useState(data?.text || '');
  const [currTextArea, setCurrTextArea] = useState(data?.textarea || '');
  const [selectionType, setSelectionType] = useState(data?.selectionType || 'sel');
  const dynamicVariables = useVariableParser(id, customInputs);

  const handleCustomInputsChange = (e) => setCustomInputs(e.target.value);
  const handleTextChange = (e) => setCurrText(e.target.value);
  const handleTypeChange = (e) => setSelectionType(e.target.value);

  const body = (
    <>
      <label>
        You can add inputs here
        <input 
          type="text" 
          value={customInputs} 
          onChange={handleCustomInputsChange}
          placeholder='Type {{inputName}} here...' 
        />
      </label>
      
      <label>
        You can briefly type here
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange}
          placeholder='Type briefly here...' 
        />
      </label>

      <label>
        You can type long things here
        <FlexibleTextArea
          value={currTextArea} 
          onChange={setCurrTextArea} 
          placeholder='Type a lot here...'
        />
      </label>

      <label>
        You can select an option here
        <select 
          value={selectionType} 
          onChange={handleTypeChange}
        >
          <option value="sel">Select from the selection below</option>
          <option value="selA">Selection A</option>
          <option value="selB">Selection B</option>
          <option value="selC">Selection C</option>
          <option value="selD">Selection D</option>
          <option value="selE">Selection E</option>
        </select>
      </label>
      
      <label>
        You can attach things here
        <input type="file" />
      </label>
    </>
  );

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Flex',
        body: body,
        inputHandles: [ `value`, `value`, `value` ], 
        outputHandles: [ `value`, `value`, `value`, `value`, `value` ],
        dynamicVariables: dynamicVariables
      }}
      selected={selected}
    />
  );
};
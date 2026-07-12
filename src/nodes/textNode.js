// textNode.js

import { useState, useEffect } from 'react';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';
import { useVariableParser } from '../hooks/useVariableParser'

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [dynamicVariables, setDynamicVariables] = useState([]);

  const handleTextChange = (e) => { setCurrText(e.target.value); };
  useVariableParser(currText, setDynamicVariables);
  
  const body = 
    <>
      <label>
        Text
        <input
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
          placeholder='Type any or {{inputName}} here...'
          rows={3}
        />
      </label>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Text',
        body: body,
        inputHandles: null,
        outputHandles: [ `output` ],
        dynamicVariables: dynamicVariables
      }}
      selected={selected}
    />
  );
}

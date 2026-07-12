// textNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';
import { useVariableParser } from '../hooks/useVariableParser'

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const dynamicVariables = useVariableParser(id, currText);

  const body = 
    <>
      <label>
        Text
        <FlexibleTextArea
          value={currText} 
          onChange={setCurrText} 
          placeholder='Type anything or define custom inputs using the {{inputName}} pattern here...'
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

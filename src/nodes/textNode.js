// textNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}} {{input2}}');
  const [dynamicVariables, setDynamicVariables] = useState([]);

  const body = 
    <>
      <label>
        Text
        <FlexibleTextArea 
          value={currText} 
          onChange={setCurrText} 
          onVariablesChange={setDynamicVariables}
        />
      </label>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Text and Custom Input',
        body: body,
        inputHandles: null,
        outputHandles: [ `output` ],
        dynamicVariables: dynamicVariables
      }}
      selected={selected}
    />
  );
}

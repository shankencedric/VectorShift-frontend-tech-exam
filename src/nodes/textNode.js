// textNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '');

  const body = 
    <>
      <label>
        Text
        <FlexibleTextArea 
          value={currText} 
          onChange={setCurrText} 
          placeholder='Type any text here...'
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
        outputHandles: [ `output` ]
      }}
      selected={selected}
    />
  );
}

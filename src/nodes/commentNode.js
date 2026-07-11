// commentNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';

export const CommentNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text);

  const body = 
    <>
      <label>
        /*
        <div className="pl-1.5 flex flex-col">
          <FlexibleTextArea value={currText} onChange={setCurrText}/>
        </div>
        */
      </label>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Comment',
        body: body,
        inputHandles: null,
        outputHandles: null
      }}
      selected={selected}
    />
  );
}

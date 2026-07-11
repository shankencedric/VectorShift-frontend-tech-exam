// llmNode.js

import { NodeBase } from '../components/nodeBase';

export const LLMNode = ({ id, data, selected }) => {

  const body = 
    <>
      <span>This is an LLM.</span>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'LLM',
        body: body,
        inputHandles: [ `system`, `prompt` ],
        outputHandles: [ `response` ]
      }}
      selected={selected}
    />
  );
}

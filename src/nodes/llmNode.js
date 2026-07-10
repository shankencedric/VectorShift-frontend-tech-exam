// llmNode.js

import { Position } from 'reactflow';
import { NodeBase } from '../components/nodeBase';

export const LLMNode = ({ id, data }) => {

  const body = 
    <div>
      <span>This is a LLM.</span>
    </div>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'LLM',
        body: body,
        inputHandles: [ `system`, `prompt` ],
        outputHandles: [ `response` ]
      }}
    />
  );
}

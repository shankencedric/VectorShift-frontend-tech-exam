// attachmentNode.js

import { NodeBase } from '../components/nodeBase';

export const AttachmentNode = ({ id, data, selected }) => {
  const body = 
    <>
      <label className="">
        <input type="file" />
      </label>
    </>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Attachment',
        body: body,
        inputHandles: null,
        outputHandles: [ `content` ]
      }}
      selected={selected}
    />
  );
}

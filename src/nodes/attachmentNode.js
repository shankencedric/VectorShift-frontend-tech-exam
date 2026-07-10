// attachmentNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { NodeBase } from '../components/nodeBase';

export const AttachmentNode = ({ id, data }) => {
  const body = 
    <div>
      <label>
        <input type="file" />
      </label>
    </div>;

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Attachment',
        body: body,
        inputHandles: null,
        outputHandles: [ `content` ]
      }}
    />
  );
}

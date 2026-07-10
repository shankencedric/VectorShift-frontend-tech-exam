// encoderNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';

export const EncoderNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [encodingType, setEncodingType] = useState(data?.encodingType || 'base64');

  const handleTextChange = (e) => setCurrText(e.target.value);
  const handleTypeChange = (e) => setEncodingType(e.target.value);

  const body = (
    <div>
      <label>
        Text to encode:
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
        />
      </label>
      <label>
        Encoding type:
        <select 
          value={encodingType} 
          onChange={handleTypeChange}
        >
          <option value="base64">Base64</option>
          <option value="url">URL</option>
          <option value="hex">Hex</option>
        </select>
      </label>
    </div>
  );

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Encoder',
        body: body,
        inputHandles: [ `value` ], 
        outputHandles: [ `value` ]
      }}
    />
  );
};
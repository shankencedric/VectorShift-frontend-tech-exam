// decoderNode.js

import { useState } from 'react';
import { NodeBase } from '../components/nodeBase';

export const DecoderNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [decodingType, setDecodingType] = useState(data?.decodingType || 'base64');

  const handleTextChange = (e) => setCurrText(e.target.value);
  const handleTypeChange = (e) => setDecodingType(e.target.value);

  const body = (
    <>
      <label>
        Name
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
          placeholder='Type name here...'
        />
      </label>
      <label>
        Decoding type
        <select 
          value={decodingType} 
          onChange={handleTypeChange}
        >
          <option value="base64">Base64</option>
          <option value="url">URL</option>
          <option value="hex">Hex</option>
        </select>
      </label>
    </>
  );

  return (
    <NodeBase
      id={id}
      data={{
        title: 'Decoder',
        body: body,
        inputHandles: [ `value` ],
        outputHandles: [ `value` ]
      }}
      selected={selected}
    />
  );
};
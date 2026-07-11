// textNode.js

import { useState, useEffect } from 'react';
import { useStore } from '../store';
import { NodeBase } from '../components/nodeBase';
import { FlexibleTextArea } from '../components/flexibleTextArea';

export const TextNode = ({ id, data, selected }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}} {{input2}}');
  const [dynamicVariables, setDynamicVariables] = useState([]);

  const updateNodeData = useStore((state) => state.updateNodeData);
  
  useEffect(() => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const found = [];
    let match;

    while ((match = regex.exec(currText)) !== null) {
      if (!found.includes(match[1]))
        found.push(match[1]);
    }

    setDynamicVariables(found);
  }, [currText]);


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    updateNodeData(id, {...data, text: currText});
  };

  const body = 
    <>
      <label>
        Text
        <FlexibleTextArea 
          value={currText} 
          onChange={setCurrText} 
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

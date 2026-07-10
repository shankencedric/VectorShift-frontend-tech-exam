// nodeBase.js

import { Handle, Position } from 'reactflow';

/**
 * A base component for creating custom nodes in the flowchart.
 * @param {string} id - Default id for reactflow node.
 * @param {Object} data - The flexible data for the node, and expects the following
 *    data.id: string,
 *    data.type: string, 
 *    data.title: string, 
 *    data.body: JSX.Element,
 *    data.inputHandles: array of objects (detailed below),
 *    data.outputHandles: array of objects (detailed below). 
 * 
 * The handle arrays expect the following:
 *    {
 *      id: string,                     
 *      type: 'source' | 'target',      // optional, defaults to 'target' for input and 'source' for output
 *      position: reactflow.Position    // optional, defaults to Left for input and Right for output
 *      style: CSSProperties            // optional (automatically aligned)
 *    }
 */
export const NodeBase = ({ id, data }) => {

  const inputs = data?.inputHandles || [];
  const outputs = data?.outputHandles || [];

  const inputHandles = inputs.map((handle, i) => (
    <Handle
      key={`inp-${i}`}
      type={handle.type ?? 'target'}
      position={handle.position ?? Position.Left}
      id={`${id}-${handle.id}`}
      style={{ top: `${(i+1) / (inputs.length+1) * 100}%`, ...handle.style }}
    />
  ));

  const outputHandles = outputs.map((handle, i) => (
    <Handle
      key={`out-${i}`}
      type={handle.type ?? 'source'}
      position={handle.position ?? Position.Right}
      id={`${id}-${handle.id}`}
      style={{ top: `${(i+1) / (inputs.length+1) * 100}%`, ...handle.style }}
    />
  ));

  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      {inputHandles}
      <div>
        <span>{data?.title}</span>
      </div>
      <div>
        {data?.body}
      </div>
      {outputHandles}
    </div>
  );
}

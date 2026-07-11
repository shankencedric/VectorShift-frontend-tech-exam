// nodeBase.js

import { Handle, Position } from 'reactflow';
import { useState, useEffect } from 'react';
import { useUpdateNodeInternals } from 'reactflow';

/**
 * @typedef {Object} HandleConfig
 * @property {string} [name] - The unique identifier for this handle (e.g., 'value', 'prompt').
 * @property {'source' | 'target'} [type] - Overrides default source/target behavior.
 * @property {Position} [position] - Overrides default Left/Right anchoring.
 * @property {React.CSSProperties} [style] - Custom styles to merge with auto-positioning.
 * @property {bool} [isDynamic] - True if defined using the `{{varName}}` text input.
 */

/**
 * A base component for creating custom nodes in the flowchart.
 * @param {Object} props
 * @param {string} props.id - Default id for reactflow node.
 * @param {Object} props.data - The flexible data payload for the node.
 * @param {string} props.data.title - The display title of the node.
 * @param {JSX.Element} props.data.body - The internal UI components of the node.
 * @param {Array<string>} props.data.dynamicVariables - User-defined variables using the `{{varName}}` text input pattern.
 * @param {Array<string | HandleConfig>} [props.data.inputHandles] - Array of string IDs or configuration objects defined as `HandleConfig`.
 * @param {Array<string | HandleConfig>} [props.data.outputHandles] - Array of string IDs or configuration objects defined as `HandleConfig`.
 */
export const NodeBase = ({ id, data, selected }) => {

  const staticInputs = NormalizeHandles(data?.inputHandles || [], false);
  const dynamicInputs = NormalizeHandles(data?.dynamicVariables || [], true);
  const inputs = [...staticInputs, ...dynamicInputs];
  const outputs = NormalizeHandles(data?.outputHandles || []);
  
  // This block updates alignment if needed
  const updateNodeInternals = useUpdateNodeInternals();
  useEffect(() => {
    updateNodeInternals(id);
  }, [inputs.length, id, updateNodeInternals]);

  return (
    <div className={`
      bg-white border rounded flex flex-col font-sans transition-all min-w-[260px]
      ${selected 
        ? 'border-vs-gold shadow-md ring-1 ring-vs-gold/50' 
        : 'border-gray-200/80 shadow-[0_2px_8px_rgba(15,19,26,0.04)] hover:border-gray-400'}
      `}>

      {/* INPUT HANDLES */}
      {inputs.map((handle, i) => (
        <Handle
          key={`inp-${i}`}
          type={handle.type ?? 'target'}
          position={handle.position ?? Position.Left}
          id={`${id}-${handle.name}-${i}`}
          className={`vs-flow-handle ${handle.isDynamic ? '!border-vs-grey' : '!border-vs-dark'}`}
          style={{ top: `${(i+1) / (inputs.length+1) * 100}%`, ...handle.style }}
        />
      ))}

      {/* HEADER */}
      <div className="px-4 py-2.5 border-b border-gray-100 bg-[#FAFAFA]/60 rounded-t">
        <h3 className="m-0 text-[13px] font-normal tracking-tight text-vs-dark">
          {data?.title}
        </h3>
      </div>
        
      {/* BODY */}
      <div className="node-body-container p-4 flex flex-col gap-3">
        {data?.body}
      </div>
        
      {/* OUTPUT HANDLES */}
      {outputs.map((handle, i) => (
        <Handle
          key={`out-${i}`}
          type={handle.type ?? 'source'}
          position={handle.position ?? Position.Right}
          id={`${id}-${handle.name}-${i}`}
          className={`vs-flow-handle`}
          style={{ top: `${(i+1) / (outputs.length+1) * 100}%`, ...handle.style }}
      />))}
    </div>
  );
};

/**
 * Normalizes an array of handles to ensure uniform object structure.
 * Converts simple string IDs into base configuration objects.
 * @param {Array<string | HandleConfig>} [handles] - The raw array of handle strings or custom configuration objects (`HandleConfig` objects).
 * @param {bool} [handles] - Defines if this array is from the user. In which case, isDynamic=true is passed to each handle returned.
 * @returns {Array<HandleConfig>} A standardized array of `HandleConfig` objects.
 */
const NormalizeHandles = (handles, isDynamic = false) => {
  if (!handles) return [];

  return handles.map((handle) => {
    if (typeof handle === 'string') 
      return { name: handle, isDynamic: isDynamic}
    return handle;
  });
};
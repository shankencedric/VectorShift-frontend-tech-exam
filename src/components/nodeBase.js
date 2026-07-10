// nodeBase.js

import { Handle, Position } from 'reactflow';

/**
 * @typedef {Object} HandleConfig
 * @property {string} [name] - The unique identifier for this handle (e.g., 'value', 'prompt').
 * @property {'source' | 'target'} [type] - Overrides default source/target behavior.
 * @property {Position} [position] - Overrides default Left/Right anchoring.
 * @property {React.CSSProperties} [style] - Custom styles to merge with auto-positioning.
 */

/**
 * A base component for creating custom nodes in the flowchart.
 * @param {Object} props
 * @param {string} props.id - Default id for reactflow node.
 * @param {Object} props.data - The flexible data payload for the node.
 * @param {string} props.data.title - The display title of the node.
 * @param {JSX.Element} props.data.body - The internal UI components of the node.
 * @param {Array<string | HandleConfig>} [props.data.inputHandles] - Array of string IDs or configuration objects defined as `HandleConfig`.
 * @param {Array<string | HandleConfig>} [props.data.outputHandles] - Array of string IDs or configuration objects defined as `HandleConfig`.
 */
export const NodeBase = ({ id, data }) => {

  const inputs = NormalizeHandles(data?.inputHandles);
  const outputs = NormalizeHandles(data?.outputHandles);

  const inputHandles = inputs.map((handle, i) => (
    <Handle
      key={`inp-${i}`}
      type={handle.type ?? 'target'}
      position={handle.position ?? Position.Left}
      id={`${id}-${handle.name}`}
      style={{ top: `${(i+1) / (inputs.length+1) * 100}%`, ...handle.style }}
    />
  ));

  const outputHandles = outputs.map((handle, i) => (
    <Handle
      key={`out-${i}`}
      type={handle.type ?? 'source'}
      position={handle.position ?? Position.Right}
      id={`${id}-${handle.name}`}
      style={{ top: `${(i+1) / (outputs.length+1) * 100}%`, ...handle.style }}
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

/**
 * Normalizes an array of handles to ensure uniform object structure.
 * Converts simple string IDs into base configuration objects.
 * @param {Array<string | HandleConfig>} [handles] - The raw array of handle strings or custom configuration objects (`HandleConfig` objects).
 * @returns {Array<HandleConfig>} A standardized array of `HandleConfig` objects.
 */
const NormalizeHandles = (handles) => {
  if (!handles) return [];

  return handles.map((handle) => {
    if (typeof handle === 'string') 
      return { name: handle }
    return handle;
  });
};
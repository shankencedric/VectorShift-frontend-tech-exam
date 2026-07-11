// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodeRegistry } from './nodes';

export const PipelineToolbar = ({ onSubmit }) => {

    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-xs">

            <div className="flex items-center gap-3 overflow-x-auto max-w-[70%] py-1 px-2 no-scrollbar">
                {nodeRegistry.map((node) => (
                    <DraggableNode 
                        key={node.type} 
                        type={node.type} 
                        label={node.label} 
                    />
                ))}
            </div>
            
            <div className="flex items-center gap-4">
                <button
                    onClick={onSubmit}
                    type="submit"
                    className="
                      px-4 py-2 min-w-[110px]
                      text-[10px] font-sans font-bold text-white bg-vs-dark
                      tracking-widest uppercase rounded-sm
                      border border-vs-dark shadow-xs
                      cursor-pointer select-none
                      hover:bg-vs-dark/90 hover:border-vs-dark
                      active:scale-[0.99]
                      transition-all duration-150 ease-in-out
                    "
                >
                    Test Pipeline
                </button>
            </div>

        </div>
    );
};

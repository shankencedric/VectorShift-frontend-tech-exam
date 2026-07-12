// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodeRegistry } from './nodes';
import { SubmitButton } from './submit';

export const PipelineToolbar = () => {

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
                <SubmitButton/>
            </div>

        </div>
    );
};
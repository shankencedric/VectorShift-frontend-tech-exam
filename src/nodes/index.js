import { InputNode } from './inputNode';
import { LLMNode } from './llmNode';
import { OutputNode } from './outputNode';
import { TextNode } from './textNode';
import { AttachmentNode } from './attachmentNode';
import { CommentNode } from './commentNode';
import { EncoderNode } from './encoderNode';
import { DecoderNode } from './decoderNode';
import { FlexNode } from './flexNode';

/** 
 * A single global registry for all node types. 
 * @type {Array<{ type: string, label: string, component: React.ComponentType }>} 
 */
export const nodeRegistry = [
    { type: 'customInput', label: 'Input', component: InputNode },
    { type: 'llm', label: 'LLM', component: LLMNode },
    { type: 'customOutput', label: 'Output', component: OutputNode},
    { type: 'text', label: 'Text', component: TextNode },
    { type: 'attachment', label: 'Attachment', component: AttachmentNode },
    { type: 'comment', label: 'Comment', component: CommentNode },
    { type: 'encoder', label: 'Encoder', component: EncoderNode },
    { type: 'decoder', label: 'Decoder', component: DecoderNode },
    { type: 'flex', label: 'Flex', component: FlexNode }
];

/** 
 * Use to map draggable nodes to their functions. 
 * @type {Record<string, React.ComponentType>} 
 */
export const nodeTypes = nodeRegistry.reduce((typesObj, node) => {
    typesObj[node.type] = node.component;
    return typesObj;
}, {});
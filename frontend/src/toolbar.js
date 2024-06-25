// toolbar.js
import { useStore } from './store';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
const nodeData = useStore((store) => store.nodeData);
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {/* <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' /> */}
            {nodeData && nodeData.map((data, idx) => <DraggableNode key={idx} type="node" id={data.nodeName} label={data.nodeName}/>)}
            </div>
        </div>
    );
};

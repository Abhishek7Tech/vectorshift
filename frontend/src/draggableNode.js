// draggableNode.js
import { useStore } from "./store";
export const DraggableNode = ({ type, label,id }) => {
const currentNodeHandler = useStore((store) => store.setCurrentNode)
    
  const onDragStart = (event, nodeType) => {
      const appData = { nodeType, currentNode: id }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
      currentNodeHandler(id)
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type,id)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '80px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: '#1C2536',
          justifyContent: 'center', 
          flexDirection: 'column'
        }} 
        draggable
      >
          <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  
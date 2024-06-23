import { Handle, Position } from "reactflow"
function removeBraces(handleName) {
    const regex = /^\{\{\s*|\s*\}\}$/g;
    return handleName.replace(regex, '');
  }

  function getSpanDistance(element) {
    const rect = element?.getBoundingClientRect();
    const scrollTop = window?.scrollY || document?.documentElement?.scrollTop;
    return rect?.top + scrollTop;
  }
  
  
  
  const TextHandle = ({ handleName = 'handle', id = 1, offsetPosition = 120 }) => {
      console.log("TEXT HANDLE", handleName, id, offsetPosition)
      
        const span = document.getElementById("name"); 
      const distanceFromTop = getSpanDistance(span);
      console.log('Distance from top:', distanceFromTop);

    const name = removeBraces(handleName);

    
    return (
        <div className="">
            <Handle type={"target"}
                id={id}
                position={Position.Left}
                style={{top: 27 * id + 1}}
                
            >
            </Handle>
            <span id="name" className="text-white font-medium text-lg">{name}</span>
        </div>
    )
}

export default TextHandle;
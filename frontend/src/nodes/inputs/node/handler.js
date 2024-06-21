import { Handle, Position } from "reactflow";

const Handlers = ({ handler }) => {
    console.log(handler);
    return (
        <div>
            {
                handler?.map((handle, idx) => {
                    const offset = handle.offsetPosition / 3;
                    const position = handle.handlePosition; 
                    const offsetPosition = position === 'right' && Position.Right || position === 'top' && Position.Top || position === 'left' && Position.Left || position === 'bottom' && Position.Bottom; 
                    console.log("OFFSET", offsetPosition)
                    return (
                        <Handle key={idx} type={handle.handleType}
                            id={handle.id}
                            position={offsetPosition}
                            style={{ top: `${offset}%` }}
                        >

                        </Handle>
                    )
                })
            }
        </div>
    )
}

export default Handlers;
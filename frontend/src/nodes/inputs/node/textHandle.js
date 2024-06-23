import { Handle, Position } from "reactflow"
function removeBraces(handleName) {
    const regex = /^\{\{\s*|\s*\}\}$/g;
    return handleName.replace(regex, '');
}

const TextHandle = ({ handleName = 'handle', id = 1, size }) => {

    const fromTop = size * 25;
    const name = removeBraces(handleName);


    return (
        <div className="">
            <Handle type={"target"}
                id={id}
                position={Position.Left}
                style={{ top: `${(100 - fromTop) / 3}%` }}
            >
            </Handle>
            <span id="name" className="text-white font-medium text-lg">{name}</span>
        </div>
    )
}

export default TextHandle;
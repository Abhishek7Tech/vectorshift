import { useState } from "react";
import { Handle, Position } from "reactflow"


function removeBraces(handleName) {
    const regex = /^\{\{\s*|\s*\}\}$/g;
    return handleName.replace(regex, '');
}

const TextHandle = ({ handleName = 'handle', id = 1, size }) => {

    let fromTop = 40;

    if(size === 2) {
        fromTop = 28;
    }

    if(size === 3) {
        fromTop = 24;
    }
    
    const name = removeBraces(handleName);
   

    return (
        <div className="">
            <Handle type={"target"}
                id={id}
                position={Position.Left}
                style={{ top: `${(fromTop)}%` }}
            >
            </Handle>
            <span id="name" className={`text-white font-medium text-lg`}>{name}</span>
        </div>
    )
}

export default TextHandle;
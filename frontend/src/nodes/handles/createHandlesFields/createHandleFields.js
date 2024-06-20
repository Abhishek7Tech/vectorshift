import { useState } from "react";

const CreateHandleFields = ({ inputs }) => {
    const inputElements = [];
    const [offsetPositions, setOffsetPositions] = useState([{id: "create-handle-inputs-1", offset: 100}]);
    
    const increaseOffsetHandler = (fieldId) => {
        if (offsetPositions < 500) {
            const offsetPosition = offsetPositions((offset) => offset.id === fieldId);
            setOffsetPositions(offsetPositions + 100);
        }
    }

    const decreaseOffsetHandler = (fieldId) => {
        if (offsetPositions > 100) {
            setOffsetPositions(offsetPositions - 100)
        }
    }
    
    for (let i = 0; i < inputs; i++) {
        const fieldId = `create-handle-inputs-${i + 1}`;
        const handleTypeId = `handle-type-${i+ 1}`;
        const handleIdtype =  `handle-id-type-${i + 1}`;
        const handlePositionId = `handle-position-${i + 1}`;
        const offsetPosition = offsetPositions.filter((offset) => offset.id === fieldId);
        inputElements.push(
            <div id={fieldId} className="flex flex-col">
                <fieldset className="border-[3px] p-4 border-red-400 rounded-xl space-y-2">
                    <legend for="create-handles" className="text-white font-mono text-lg"> {`Create Handle-${i + 1}:`} </legend>
                    <div className="flex space-x-4 items-center">
                        <label for={handleTypeId} className="text-white font-mono text-lg">Handle Type: </label>
                        <select id={handleTypeId} name={handleTypeId} className="rounded-lg px-1 h-[30px] outline-none">
                            <option value='source'>Source</option>
                            <option value='target'>Target</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for={handleIdtype} className="text-white font-mono text-lg">Handle Id Type:</label>
                        <select id={handleIdtype} name={handleIdtype} className="rounded-lg px-1 h-[30px] outline-none">
                            <option value='value'>Value</option>
                            <option value='response'>Response</option>
                            <option value='system'>System</option>
                            <option value='prompt'>Prompt</option>
                            <option value='output'>Output</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for={handlePositionId} className="text-white font-mono text-lg">Handle Position:</label>
                        <select id={handlePositionId} name={handlePositionId} className="rounded-lg px-1 h-[30px] outline-none">
                            <option value='right'>Right</option>
                            <option value='left'>Left</option>
                            <option value='top'>Top</option>
                            <option value='bottom'>Bottom</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-position-offset" className="text-white font-mono text-lg">Handle Position Offset:</label>
                        <span className="rounded-lg px-4 text-center h-[30px] outline-none bg-white text-black text-lg font-mono">{offsetPosition[0].offset}</span>
                        <div className="flex space-x-4 items-center">
                            <button type="button" id={fieldId} onClick={() => increaseOffsetHandler(fieldId)} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">+</button>
                            <button type="button" id={fieldId} onClick={() => decreaseOffsetHandler(fieldId)} className="font-semibold text-base rounded-lg bg-cyan-200 px-[14px] py-[2px]"> - </button>
                        </div>
                    </div>
                </fieldset>
            </div>
        )

    }
    return inputElements;
}

export default CreateHandleFields;
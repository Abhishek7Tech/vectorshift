import { useState } from "react";

const CreateHandleFields = ({ handle }) => {
    const [offsetPositions, setOffsetPositions] = useState([]);
    const defaultOffset = 100;

    const increaseOffsetHandler = (offsetId) => {
        const offsetValues = offsetPositions.filter((offset) => offset.id === offsetId);
        if (offsetValues.length < 1) {
            setOffsetPositions([...offsetPositions, { id: offsetId, offsetValue: 200 }]);
            return;
        }

        if (offsetValues[0].offsetValue < 500) {
            const updateOffsetPositions = offsetPositions.map((offsets) => offsets.id === offsetId ? {id: offsetId, offsetValue: offsets.offsetValue + 100} : offsets);
            console.log(updateOffsetPositions);
            setOffsetPositions(updateOffsetPositions);
        }

    }

    const decreaseOffsetHandler = (offsetId) => {
        const offsetValues = offsetPositions.filter((offset) => offset.id === offsetId);
        if(offsetValues.length < 1) {
            return;
        }
  
        if (offsetValues[0].offsetValue > 100) {
            const updateOffsetPositions = offsetPositions.map((offsets) => offsets.id === offsetId ? {id: offsetId, offsetValue: offsets.offsetValue - 100} : offsets);
            setOffsetPositions(updateOffsetPositions);
        }

    }
    const inputElements = [];
    for (let i = 0; i < handle; i++) {
        const fieldId = `create-handle-inputs-${i + 1}`;
        const handleTypeId = `handle-type-${i + 1}`;
        const handleIdtype = `handle-id-type-${i + 1}`;
        const handlePositionId = `handle-position-${i + 1}`;
        const handlePositionOffsetId = `handle-position-offset-${i + 1}`;
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
                        <label for={handlePositionOffsetId} className="text-white font-mono text-lg">Handle Position Offset:</label>
                        <span id={handlePositionOffsetId} name={handlePositionOffsetId} className="rounded-lg px-4 text-center h-[30px] outline-none bg-white text-black text-lg font-mono">{offsetPosition[0]?.offsetValue || defaultOffset}</span>
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
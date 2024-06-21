import { useEffect, useState } from "react";
import { useStore } from "../../../store";
const CreateHandleFields = ({ handle }) => {
    const [handleInputs, setHandleInputs] = useState([]);

    const [offsetPositions, setOffsetPositions] = useState([]);
    const [handleType, setHandleType] = useState("source");
    const [handlesId, setHandleId] = useState("value");
    const [handlePosition, setHandlePosition] = useState("right");
    const handleOptionsHandler = useStore((store) => store.gethandleOptions);
    const defaultOffset = 100;
    const increaseOffsetHandler = (offsetId) => {
        const offsetValues = offsetPositions.filter((offset) => offset.id === offsetId);
        if (offsetValues.length < 1) {
            setOffsetPositions([...offsetPositions, { id: offsetId, offsetValue: 200 }]);
            return;
        }

        if (offsetValues[0].offsetValue < 500) {
            const updateOffsetPositions = offsetPositions.map((offsets) => offsets.id === offsetId ? { id: offsetId, offsetValue: offsets.offsetValue + 100 } : offsets);
            console.log(updateOffsetPositions);
            setOffsetPositions(updateOffsetPositions);
        }

    }

    const decreaseOffsetHandler = (offsetId) => {
        const offsetValues = offsetPositions.filter((offset) => offset.id === offsetId);
        if (offsetValues.length < 1) {
            return;
        }

        if (offsetValues[0].offsetValue > 100) {
            const updateOffsetPositions = offsetPositions.map((offsets) => offsets.id === offsetId ? { id: offsetId, offsetValue: offsets.offsetValue - 100 } : offsets);
            setOffsetPositions(updateOffsetPositions);
        }

    }

    const handleTypeHandler = (e) => {
        const handleName = e.target.name;
        const value = e.target.value;
        // console.log("id", handleId);

        // console.log("VAL", value, "NAME", handleName, "id", handleId);
        console.log("VALUE", value);
        // console.log("OFFSET", offset, handleName);
        if (handleName === 'handle-type') {
            setHandleType(value);
        }

        if (handleName === 'handle-id') {
            setHandleId(value)
        }

        if (handleName === 'handle-position') {
            setHandlePosition(value);
        }


        // console.log( handleInputs);

    }

    const setHandles = (e) => {
        const handleId = e.target.id;
        const handleValues = handleInputs.filter((handleInputs) => handleInputs.id === handleId);
        const offset = offsetPositions.filter((offset) => offset.id === handleId);
        const offsetPosition = offset[0]?.offsetValue || defaultOffset;
        console.log("INPUT BEFORe", handleInputs, handleId)
        if (handleValues.length < 1) {
            setHandleInputs([...handleInputs, { id: handleId, handleType, handlesId, handlePosition, offsetPosition }]);
            setHandleType("source");
            setHandleId("value");
            setHandlePosition("right");
            return;
        }
        const updatedHandleInputs = handleInputs.map((handleInput) => handleInput.id === handleId ? { id: handleId, handleType, handlesId, handlePosition, offsetPosition } : handleInput)
        setHandleInputs(updatedHandleInputs);
        setHandleType("source");
        setHandleId("value");
        setHandlePosition("right");
    }

    useEffect(() => {
        handleOptionsHandler(handleInputs);
    }, [handleInputs])

    const inputElements = [];
    for (let i = 0; i < handle; i++) {
        const fieldId = `create-handle-inputs-${i + 1}`;
        const offsetPosition = offsetPositions.filter((offset) => offset.id === fieldId);
        inputElements.push(
            <div key={fieldId} className="flex flex-col">
                <fieldset className="border-[3px] p-4 border-red-400 rounded-xl space-y-2">
                    <legend for="create-handles" className="text-white font-mono text-lg"> {`Create Handle-${i + 1}:`} </legend>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-type" className="text-white font-mono text-lg">Handle Type: </label>
                        <select id={fieldId} name="handle-type" className="rounded-lg px-1 h-[30px] outline-none" onChange={(e) => handleTypeHandler(e)}>
                            <option value='source'>Source</option>
                            <option value='target'>Target</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-id" className="text-white font-mono text-lg">Handle Id Type:</label>
                        <select id={fieldId} name="handle-id" className="rounded-lg px-1 h-[30px] outline-none" onChange={(e) => handleTypeHandler(e)} >
                            <option value='value'>Value</option>
                            <option value='response'>Response</option>
                            <option value='system'>System</option>
                            <option value='prompt'>Prompt</option>
                            <option value='output'>Output</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-position" className="text-white font-mono text-lg">Handle Position:</label>
                        <select id={fieldId} name="handle-position" className="rounded-lg px-1 h-[30px] outline-none" onChange={(e) => handleTypeHandler(e)}>
                            <option value='right'>Right</option>
                            <option value='left'>Left</option>
                            <option value='top'>Top</option>
                            <option value='bottom'>Bottom</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-offset" className="text-white font-mono text-lg">Handle Position Offset:</label>
                        <span id={fieldId} name="handle-offset" className="rounded-lg px-4 text-center h-[30px] outline-none bg-white text-black text-lg font-mono">{offsetPosition[0]?.offsetValue || defaultOffset}</span>
                        <div className="flex space-x-4 items-center">
                            <button type="button" id={fieldId} onClick={() => increaseOffsetHandler(fieldId)} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">+</button>
                            <button type="button" id={fieldId} onClick={() => decreaseOffsetHandler(fieldId)} className="font-semibold text-base rounded-lg bg-cyan-200 px-[14px] py-[2px]"> - </button>
                        </div>
                    </div>

                    <button type="button" id={fieldId} onClick={(e) => setHandles(e)} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">ADD HANDLER</button>


                </fieldset>
            </div>
        )

    }
    return inputElements;
}

export default CreateHandleFields;
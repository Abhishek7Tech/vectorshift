import { useState } from "react";
import { useStore } from "../store";
import CreateInputs from "../nodes/inputs/inputTypes/inputType";
import CreateInputsFields from "../nodes/inputs/createInputFields/createInputsField";
import CreateHandles from "../nodes/handles/createHandles/createHandles";
import CreateHandleFields from "../nodes/handles/createHandlesFields/createHandleFields";


const RootNode = () => {

    const HideForm = useStore((state) => state.hideForm);
    const AddInput = useStore((state) => state.addInput);
    const AddHandle = useStore((state) => state.addHandle);
    const Inputs = useStore((store) => store.inputs);
    const [offsetPositions, setOffsetPositions] = useState([]);
    const Handles = useStore((store) => store.handles);
    const defaultOffset = 100;
    // const [inputs, setInputs] = useState(1);
    // const [addInput, setAddInput] = useState(false);

    const increaseOffsetHandler = (offsetId) => {
        const offsetValues = offsetPositions.filter((offset) => offset.id === offsetId);
        console.log("VALUE", offsetId, offsetValues)
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


    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    const createHandles = (handle) => {
        const inputElements = [];
        for (let i = 0; i < handle; i++) {
            const fieldId = `create-handle-inputs-${i + 1}`;
            const handleTypeId = `handle-type-${i + 1}`;
            const handleIdtype = `handle-id-type-${i + 1}`;
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
                            <span className="rounded-lg px-4 text-center h-[30px] outline-none bg-white text-black text-lg font-mono">{offsetPosition[0]?.offsetValue || defaultOffset}</span>
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

    return (
        <form onSubmit={() => formSubmitHandler()} className="z-10 p-4 flex flex-col bg-blue-400 w-2/3 mx-auto space-y-4 rounded-3xl">
            <div className="flex justify-end">
                <button type="button" onClick={HideForm} className="text-white font-semibold text-base rounded-lg bg-red-500 px-3 py-[2px]">X</button>
            </div>
            <div className="flex space-x-4 items-center">
                <label for="node-name" className="text-white font-mono text-lg">Node name: </label>
                <input type="text" id="node-name" name="node-name" className="rounded-lg h-8 outline-none p-1"></input>
            </div>
            <div className="flex flex-col">
                <CreateInputsFields />
                <div className="flex flex-col">
                    {/* {addInput && createInputs(inputs)} */}
                    {AddInput && <CreateInputs inputs={Inputs} />}

                </div>
                <CreateHandles />
            </div>
            {AddHandle && createHandles(Handles)}
            {/* {AddHandle && <CreateHandleFields inputs={1}/>} */}
            {/* <div className="flex flex-col">
                <fieldset className="border-[3px] p-4 border-red-400 rounded-xl space-y-2">
                    <legend for="create-handles" className="text-white font-mono text-lg">Create Handles: </legend>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-type" className="text-white font-mono text-lg">Handle Type: </label>
                        <select id="handle-type" name="handle-type" className="rounded-lg px-1 h-[30px] outline-none">
                            <option value='source'>Source</option>
                            <option value='target'>Target</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-id-type" className="text-white font-mono text-lg">Handle Id Type:</label>
                        <select id="handle-id-type" name="handle-id-type" className="rounded-lg px-1 h-[30px] outline-none">
                            <option value='value'>Value</option>
                            <option value='response'>Response</option>
                            <option value='system'>System</option>
                            <option value='prompt'>Prompt</option>
                            <option value='output'>Output</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-position" className="text-white font-mono text-lg">Handle Position:</label>
                        <select id="handle-position" name="handle-position" className="rounded-lg px-1 h-[30px] outline-none">
                            <option value='right'>Right</option>
                            <option value='left'>Left</option>
                            <option value='top'>Top</option>
                            <option value='bottom'>Bottom</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label for="handle-position-offset" className="text-white font-mono text-lg">Handle Position Offset:</label>
                        <span className="rounded-lg px-4 text-center h-[30px] outline-none bg-white text-black text-lg font-mono">{offsetPositions}</span>
                        <div className="flex space-x-4 items-center">
                            <button type="button" onClick={() => increaseOffsetHandler()} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">+</button>
                            <button type="button" onClick={() => decreaseOffsetHandler()} className="font-semibold text-base rounded-lg bg-cyan-200 px-[14px] py-[2px]"> - </button>
                        </div>
                    </div>
                </fieldset>
            </div> */}
            <button type="submit" className="bg-cyan-200 w-fit mx-auto px-2 pb-1 rounded-md">Create</button>
        </form>
    )
}




export default RootNode;


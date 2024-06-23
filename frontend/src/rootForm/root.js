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
    const Handles = useStore((store) => store.handles);
    const labels = useStore((store) => store.dropDownLabel);
    const dropDowns = useStore((store) => store.dropDownOptions);
    const inputState = useStore((store) => store.textInputState);
    const [nodeName, setNodeName] = useState('');
    const handleOptions = useStore((store) => store.handleOptions);
    const setNodeData = useStore((store) => store.setNodeData);
    const nodeData = useStore((store) => store.nodeData);

    const nodeNameHandler = (e) => {
        setNodeName(e.target.value);
    }



    const formSubmitHandler = (e) => {
        e.preventDefault();
        const isNodeNameValid = nodeData.filter((nodes) => nodes.nodeName === nodeName)
        if(isNodeNameValid.length === 1) {
            setNodeName('')
            alert("Nodename already exsist");
            return;
        }
        const nodeInputs = [{
            nodeName,
            inputState,
            labels,
            dropDowns,
            handleOptions
        }];
        setNodeData(nodeInputs);

        HideForm()


    }


    return (
        <form onSubmit={(e) => formSubmitHandler(e)} className="z-10 p-4 flex flex-col bg-blue-400 w-2/3 mx-auto space-y-4 rounded-3xl">
            <div className="flex justify-end">
                <button type="button" onClick={HideForm} className="text-white font-semibold text-base rounded-lg bg-red-500 px-3 py-[2px]">X</button>
            </div>
            <div className="flex space-x-4 items-center">
                <label for="node-name" className="text-white font-mono text-lg">Node name: </label>
                <input autoComplete="off" type="text" id="node-name" name="node-name" className="rounded-lg h-8 outline-none p-1" onChange={(e) => nodeNameHandler(e)}></input>
            </div>
            <div className="flex flex-col">
                <CreateInputsFields />
                <div className="flex flex-col">
                    {AddInput && <CreateInputs inputs={Inputs} />}

                </div>
                <CreateHandles />
            </div>
            {AddHandle && <CreateHandleFields handle={Handles} />}

            <button type="submit" className="bg-cyan-200 w-fit mx-auto px-2 pb-1 rounded-md" >Create</button>
        </form>
    )
}




export default RootNode;


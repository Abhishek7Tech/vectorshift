import { useStore } from "../../../store";
const CreateInputsFields = () => {
    const Inputs = useStore((store) => store.inputs);
    const increaseInputHandler = useStore((store) => store.increaseInputs)

    const decreaseInputHandler = useStore((store) => store.decreaseInputs)
    const  addInputHandler = useStore((store) => store.setAddInput)
    return (
        <div className="flex space-x-4">
            <label for="create-inputs" className="text-white font-mono text-lg">Create Inputs:  </label>
            <span className="rounded-lg px-8 py-1 h-[30px] outline-none bg-white text-black font-mono"> {Inputs} </span>
            <div className="flex space-x-4 items-center">
                <button type="button" onClick={increaseInputHandler} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">+</button>
                <button type="button" onClick={decreaseInputHandler} className="font-semibold text-base rounded-lg bg-cyan-200 px-[14px] py-[2px]"> - </button>
                <button type="button" onClick={addInputHandler} className="font-semibold rounded-lg bg-cyan-200 px-[14px] py-[2px] text-black">Create</button>
            </div>
        </div>
    )
}

export default CreateInputsFields;
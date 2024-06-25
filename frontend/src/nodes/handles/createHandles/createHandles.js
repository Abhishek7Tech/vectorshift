import { useStore } from "../../../store";

const CreateHandles = () => {
    const Handles = useStore((store) => store.handles);
    const increaseHandles = useStore((store) => store.increaseHandles);
    const decreaseHandles = useStore((store) => store.decreaseHandles);
    const addHandles = useStore((store) => store.setAddHandler);
    return (
        <div className="flex space-x-4 space-y-3 items-baseline">
        <label for="create-inputs" className="text-white font-mono text-lg">Create Handles:  </label>
        <span className="rounded-lg px-8 py-1 h-[30px] outline-none bg-white text-black font-mono"> {Handles} </span>
        <div className="flex space-x-4 items-center">
            <button type="button" onClick={increaseHandles} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">+</button>
            <button type="button" onClick={decreaseHandles} className="font-semibold text-base rounded-lg bg-cyan-200 px-[14px] py-[2px]"> - </button>
            <button type="button" onClick={addHandles} className="font-semibold rounded-lg bg-cyan-200 px-[14px] py-[2px] text-black">Create</button>
        </div>
    </div>
    )
}

export default CreateHandles;
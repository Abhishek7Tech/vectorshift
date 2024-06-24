import { useStore } from "../store";

const CreateNode = () => {
    const nodeFormHandler = useStore((state) => state.showForm);
    
    return (
        <button className="bg-black text-white w-fit mx-auto px-2 py-1 rounded-md hover:bg-blue-400" onClick={nodeFormHandler}>
            Create Custom Nodes
        </button>
    )
}

export default CreateNode;
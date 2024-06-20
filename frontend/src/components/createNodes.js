import { useStore } from "../store";

const CreateNode = () => {
    const nodeFormHandler = useStore((state) => state.showForm)
    
    return (
        <button onClick={nodeFormHandler}>
            Create Custom Nodes
        </button>
    )
}

export default CreateNode;
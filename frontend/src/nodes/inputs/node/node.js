import { useStore } from "../../../store";
const Node = () => {
    const nodeData = useStore((store) => store.nodeData);
    return (
        <div>
                {
                   nodeData && nodeData.map((data, idx) => {
                    console.log(data);
                   })
                }
        </div>
    )
}

export default Node;
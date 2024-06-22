import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
export const Node = ({id, data}) => {
    console.log("DATA", id, data);
    const nodeData = useStore((store) => store.nodeData);
    const currentNode = useStore((store) => store.currentNode);
    console.log("CURRE", currentNode)
    return (
        <>
            {nodeData.map((node, idx) => {
                
                const { inputState, labels, dropDowns, handleOptions, nodeName } = node;
                return (
                    <div key={idx}>
                   { nodeName === currentNode && <div key={idx} className="rounded-md bg-blue-400 border-2 border-white p-2 space-y-3">
                        <TextNode data={inputState} />
                        <DropDown labels={labels} dropdownOptions={dropDowns} />
                        <Handlers handler={handleOptions} />
                    </div> }
                    </div>
                )
            })

            }
        </>
    )
}

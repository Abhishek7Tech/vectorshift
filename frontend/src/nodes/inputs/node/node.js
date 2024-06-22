import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
export const Node = ({id, data}) => {
    console.log("DATA", id, data);
    const nodeData = useStore((store) => store.nodeData);
    return (
        <>
            {nodeData.map((node, idx) => {
                
                const { inputState, labels, dropDowns, handleOptions, nodeName } = node;
                return (
                    <>
                   { nodeName === data.nodeType && <div key={idx} className="rounded-md bg-blue-400 border-2 border-white p-2 space-y-3">
                        <TextNode data={inputState} />
                        <DropDown labels={labels} dropdownOptions={dropDowns} />
                        <Handlers handler={handleOptions} />
                    </div> }
                    </>
                )
            })

            }
        </>
    )
}

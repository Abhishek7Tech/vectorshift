import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
export const Node = () => {
    const nodeData = useStore((store) => store.nodeData);
    const {inputState, labels, dropDowns, handleOptions} = nodeData[0];
    console.log("NODEDATA", nodeData, inputState);
    return (
        <div className="rounded-md bg-blue-400 border-2 border-white p-2 space-y-3">
           <TextNode data={inputState}/>
           <DropDown labels={labels} dropdownOptions={dropDowns}/>
           <Handlers handler={handleOptions}/>
        </div>
    )
}

import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
export const Node = () => {
    const nodeData = useStore((store) => store.nodeData);
    const {inputState, labels, dropDowns, handleOptions} = nodeData[0];
    console.log("NODEDATA", nodeData, inputState);
    return (
        <div className="bg-red-200" style={{width: 200, height: "auto", border: '1px solid black'}}>
           <TextNode data={inputState}/>
           <DropDown labels={labels} dropdownOptions={dropDowns}/>
           <Handlers handler={handleOptions}/>
        </div>
    )
}

import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
export const Node = ({ id, data }) => {
    console.log("DATA", id, data);
    const nodeData = useStore((store) => store.nodeData);
    const currNode = nodeData.filter((node) => node.nodeName === data.nodeName);
    
    console.log("CURRE", currNode)
    return (
        <>
            {currNode.map((node, idx) => {

                const { inputState, labels, dropDowns, handleOptions, nodeName } = node;
                console.log("NODENAME", nodeName, idx)
                return (
                    <div key={idx}>
                        {data.nodeName == nodeName && <div key={idx} className="rounded-md bg-blue-400 border-2 border-white p-2 space-y-3">
                            <TextNode data={inputState} />
                            <DropDown labels={labels} dropdownOptions={dropDowns} />
                            <Handlers handler={handleOptions} />
                        </div>}
                    </div>
                )
            })

            }
        </>
    )
}

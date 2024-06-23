import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
import TextHandle from "./textHandle";


export const Node = ({ id, data }) => {
    console.log("DATA", id, data);
    const nodeData = useStore((store) => store.nodeData);
    const currNode = nodeData.filter((node) => node.nodeName === data.nodeName);
    const currNodeName = currNode[0].nodeName;
    const handleText = useStore((store) => store.textHandlerValue);
    const textHandle = useStore((store) => store.textHandle);
    // console.log("TEXTTTT", textHandle, handleText)
    return (
        <>
            {currNode.map((node, idx) => {
                // console.log("TEXT", handleText, currNodeName, textHandle);
                console.log("NODE__NAME", currNodeName);
                console.log("TEXT VALUE", handleText);
                console.log("TEXT HANDLE", textHandle)
                const { inputState, labels, dropDowns, handleOptions, nodeName } = node;
                console.log("INPUT STATE", inputState);
                const handle = handleText.filter((handle) => handle.id === id && handle.textId === inputState[0].value);
                const handleName = handle[0]?.value;
                // console.log("NODENAME", "INPUTS",inputState, nodeName, idx)
                console.log("HANDLE NAME", handleName, handle);
                return (
                    <div className="rounded-md bg-blue-400 border-2 border-white p-2" key={idx}>
                        {textHandle.map((text) => text.textId === inputState[0].value && text.id === id && <TextHandle size={inputState.length} handleName={handleName} id={text.id}/> )}
                        {data.nodeName == nodeName && <div key={idx} className="space-y-4">
                            <TextNode data={inputState} nodeId={id} />
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

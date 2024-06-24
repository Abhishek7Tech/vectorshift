import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import DropDown from "./dropDown";
import Handlers from "./handler";
import TextNode from "./textNode";
import TextHandle from "./textHandle";


export const Node = ({ id, data }) => {
    const nodeData = useStore((store) => store.nodeData);
    const currNode = nodeData.filter((node) => node.nodeName === data.nodeName);
    const handleText = useStore((store) => store.textHandlerValue);
    const textHandle = useStore((store) => store.textHandle);
    return (
        <>
            {currNode.map((node, idx) => {

                const { inputState, labels, dropDowns, handleOptions, nodeName } = node;
                const handle = handleText.filter((handle) => handle.id === id && handle.textId === inputState[0].value);
                const handleName = handle[0]?.value;
                return (
                    <div className="rounded-md bg-blue-400 border-2 border-white p-2 underline-offset-4" key={idx}>
                        <h1 className="text-purple-100 text-xl text-center underline font-semibold">{nodeName}</h1>
                        {textHandle.map((text) => text.textId === inputState[0]?.value && text.id === id && <TextHandle size={inputState.length} handleName={handleName} id={text.id} />)}
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

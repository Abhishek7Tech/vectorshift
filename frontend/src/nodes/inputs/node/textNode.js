import { useEffect, useState } from "react"
import TextHandle from "./textHandle";


const TextNode = ({ data }) => {
    console.log("DATA", data)
    const [inputWidth, setInputWidth] = useState([]);
    const [inputHeight, setInputHeight] = useState([]);
    const [texts, setTexts] = useState([]);
    const [textLength, setTextLength] = useState(0);
    const [handle, setHandle] = useState([]);
    function isValidInput(input) {
        const regex = /^\{\{\s*[a-z]+([A-Z][a-z]*)*\s*\}\}$/;
        return regex.test(input);
    }

    const inputHandler = (e) => {
        const value = e.target.value;
        const textId = e.target.name;

        const createHandle = isValidInput(value);
        if (createHandle) {
            setHandle([{ id: textId, handleState: true }])
        }else {
            setHandle([{ id: textId, handleState: false }])

        }
        setTextLength(value.length);
        // TEXT LENGTH
        const inputText = texts.filter((text) => text.id === textId);
        if (inputText.length < 1) {
            setTexts([...texts, { id: textId, input: value }]);
            return;
        }

        const updateTexts = texts.map((text) => text.id === textId ? { ...text, input: value } : text);
        setTexts(updateTexts);

        // // INPUT HEIGHT
        const height = Math.floor(textLength / 28);
        console.log("IN HEIGHT", height);
        if (height > 0) {

            const textFieldHeight = inputHeight.filter((input) => input.id === textId);
            if (textFieldHeight.length < 1) {
                setInputHeight([...inputHeight, { id: textId, height: 3 }])
                return;
            }

            const updateHeight = inputHeight.map((text) => text.id === textId && text.height < 6 ? { ...text, height: text.height + 3 } : text);
            setInputHeight(updateHeight);

        }
        // INPUT WIDTH
        const textFieldWidth = inputWidth.filter((input) => input.id === textId);
        if (textFieldWidth.length < 1) {
            setInputWidth([...inputWidth, { id: textId, width: 16 }]);
            return;
        }
        console.log("TEXTW", textFieldWidth);
        const updateWidth = inputWidth.map((text) => text.id === textId && text.width < 26 ? { ...text, width: text.width + 2 } : text)
        console.log("UPDATEW", updateWidth);
        setInputWidth(updateWidth);
        setTextLength(0);
    }
    return (
        <div>
            {
                data?.map((inputs, idx) => {
                    const inputW = inputWidth.filter((input) => input.id === inputs.value);
                    const width = inputW[0]?.width || 12;
                    console.log("WIDHT", width, inputW);
                    const inputH = inputHeight.filter((input) => input.id === inputs.value);
                    const height = inputH[0]?.height || 1;
                    console.log("HEIGHT", height)
                    const inputText = texts.filter((text) => text.id === inputs.value);
                    const text = inputText[0]?.input || '';
                    const offsetPosition = (idx * 100)/3;
                    return (
                        <>
                            {handle.map((handle) => handle.id === inputs.value && handle.handleState === true && <TextHandle handleName={text} id={idx} offsetPosition={offsetPosition} />)}
                            <div key={idx} className="flex space-x-3 space-y-3 items-baseline">
                                <label for={inputs.value} className="text-white font-medium text-lg">{`${inputs.value} :`} </label>
                                {/* <input type={inputs.type} name={inputs.value} value={text} className={`rounded-lg h-12 outline-none p-1 w-${width}`} onChange={(e) => inputHandler(e)}></input> */}
                                <textarea rows={height} cols={width} type={inputs.type} name={inputs.value} value={text} className={`rounded-lg h-8 outline-none p-1 overflow-hidden`} onChange={(e) => inputHandler(e)}></textarea>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default TextNode;
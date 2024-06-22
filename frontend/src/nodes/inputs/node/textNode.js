import { useEffect, useState } from "react"

const TextNode = ({ data }) => {
    console.log("DATA", data)
    const [inputWidth, setInputWidth] = useState([]);
    const [inputHeight, setInputHeight] = useState([]);
    const [texts, setTexts] = useState([]);
    const [currentTextId, setCurrentTextId] = useState('');
    const [textLength, setTextLength] = useState(0);

    // useEffect(() => {
    //     // INPUT WIDTH
    //     console.log("IID", currentTextId);
    //     if (!currentTextId) {
    //         return;
    //     }
    //     const textFieldWidth = inputWidth.filter((input) => input.id === currentTextId);
    //     if (textFieldWidth.length < 1) {
    //         setInputWidth([...inputWidth, { id: currentTextId, width: 8 }]);
    //         return;
    //     }
    //     console.log("TEXTW", textFieldWidth, textLength);
    //     const updateWidth = inputWidth.map((text) => text.id === currentTextId && text.width < 20 ? { ...text, width: text.width + 1 } : text)
    //     console.log("UPDATEW", updateWidth);
    //     setInputWidth(updateWidth);

  
    // }, [texts, currentTextId])

    const inputHandler = (e) => {
        const value = e.target.value;
        const textId = e.target.name;
        console.log("VALUE", value, value.length);
        setTextLength(value.length);
        setCurrentTextId(textId);
        // TEXT LENGTH
        const inputText = texts.filter((text) => text.id === textId);
        if (inputText.length < 1) {
            setTexts([...texts, { id: textId, input: value }]);
            return;
        }

        const updateTexts = texts.map((text) => text.id === textId ? { ...text, input: value } : text);
        setTexts(updateTexts);

        // // INPUT HEIGHT
        // console.log("IN HEIGHT");
        //         const textFieldHeight = inputHeight.filter((input) => input.id === textId);
        //         if (textFieldHeight.length < 1) {
        //             setInputHeight([...inputHeight, { id: textId, height: 1 }])
        //             return;
        //         }

        //         const height = Math.floor(textLength / 40); 
        //         const updateHeight = inputHeight.map((text) => text.id === textId ? {...text, height}: text);
        //         setInputHeight(updateHeight);

        // INPUT WIDTH
        const textFieldWidth = inputWidth.filter((input) => input.id === textId);
        if(textFieldWidth.length < 1) {
            setInputWidth([...inputWidth, {id: textId, width: 16}]);
            return;
        }
        console.log("TEXTW", textFieldWidth);
        const updateWidth = inputWidth.map((text) => text.id === textId && text.width < 28 ? {...text, width: text.width + 4} : text)
        console.log("UPDATEW", updateWidth);
        setInputWidth(updateWidth);
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
                    const inputText = texts.filter((text) => text.id === inputs.value);
                    const text = inputText[0]?.input || '{{input}}';

                    return (
                        <div key={idx} className="flex space-x-3 ">
                            <label for={inputs.value} className="text-white font-medium text-lg">{`${inputs.value} :`} </label>
                            {/* <input type={inputs.type} name={inputs.value} value={'{{input}}'} className={`rounded-lg h-8 outline-none p-1 w-[${width}px]`} onChange={(e) => inputLengthHandler(e)}></input> */}
                            <textarea rows={height} cols={width} type={inputs.type} name={inputs.value} value={text} className={`rounded-lg h-8 outline-none p-1 overflow-hidden`} onChange={(e) => inputHandler(e)}></textarea>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TextNode;
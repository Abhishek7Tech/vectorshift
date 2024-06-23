import { useStore } from "../../../store";
import CreateDropDown from "../dropDown/dropDown";
import CreateTextInput from "../textInputs/textInput";
import { useState } from "react";
const CreateInputs = ({ inputs }) => {

    const [showInputsField, setShowInputsField] = useState([]);
    const [inputsTypes, setInputsTypes] = useState([]);
    const [inputText, setInputText] = useState([]);
    const textStateHandler = useStore((store) => store.setTextInputState);


    const inputTypesHandler = (id, type) => {
        const Input = inputsTypes.filter((input) => input.id === id);
        if(Input.length < 1) {
            setInputsTypes([...inputsTypes, { id: id, value: type }]);
            return;
        }
        const updatedInputsType = inputsTypes.map((inputs) => inputs.id === id ? {...inputs, value: type} : inputs);
        setInputsTypes(updatedInputsType);
    }

    // ADD BUTTON HANDLER
    const addInputHandler = (id) => {
        console.log("TYPES", showInputsField);
        const Input = inputsTypes.filter((input) => input.id === id);
        if (Input.length === 0) {
            setInputsTypes([...inputsTypes, { id: id, value: 'text' }]);
            setShowInputsField([...showInputsField, { id: id, show: true, type: 'text' }]);
            return;
        }
        const updatedInputTypes = inputsTypes.map((inputs) => inputs.id === id ? {...inputs, value: Input[0].value } : inputs);
        setInputsTypes(updatedInputTypes);
        console.log("INPUT", Input);
        setShowInputsField([...showInputsField, { id: id, show: true, type: Input[0].value }]);

    }

    const inputTextHandler = (e) => {
        const inputId = e.target.id;
        const value = e.target.value;
        console.log("ID", inputId, "Value", value);
        const input = inputText.filter((input) => input.id === inputId);
        if (input.length < 1) {
            setInputText([...inputText, { id: inputId, value: value, type: "text" }])
            console.log("INPUT TEXT",inputText)
            textStateHandler([...inputText, { id: inputId, value: value, type: "text"}])
            return;
        }
        const updatedInputText = inputText.map((input) => input.id === inputId ? { id: inputId, value, type: 'text' } : input)
        console.log("INPUT TEXT", updatedInputText);
        setInputText(updatedInputText);
        textStateHandler([...updatedInputText])
    }

    

    const inputElements = [];
    for (let i = 0; i < inputs; i++) {
        const fieldId = `createinputs-${i + 1}`;
        inputElements.push(
            <>
                <div key={i} className="space-x-4 space-y-4">
                    <label for={fieldId} className="text-white font-mono text-lg">Input-{i + 1}:  </label>
                    <select id={fieldId} name={fieldId} className="rounded-lg px-1 h-[30px] outline-none" onChange={(e) => inputTypesHandler(e.target.id, e.target.value)}>
                        <option value='text' className="rounded-lg px-1 h-[30px] outline-none">Text</option>
                        <option value='dropdown' className="rounded-lg px-1 h-[30px] outline-none">Dropdown</option>
                    </select>
                    <button type="button" id={fieldId} onClick={(e) => addInputHandler(e.target.id)} className="font-semibold rounded-lg bg-cyan-200 px-[14px] py-[2px] text-black">Add</button>
                    {/* <button type="button" id={fieldId} onClick={(e) => addInputHandler(e.target.id)} className="font-semibold rounded-lg bg-cyan-200 px-[14px] py-[2px] text-black">Add</button> */}
                </div>
                {showInputsField.map((field) => field.id === fieldId && field.show === true && field.type === 'text' && <CreateTextInput id={fieldId} textHandler={inputTextHandler} fieldset={`Input-${i + 1}:`} />)}
                {showInputsField.map((field) => field.id === fieldId && field.show === true && field.type === 'dropdown' && <CreateDropDown id={fieldId} />)}

            </>
        )
    }
    return inputElements;
}

export default CreateInputs;
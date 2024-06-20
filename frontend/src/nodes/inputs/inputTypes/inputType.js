import { useStore } from "../../../store";
import CreateDropDown from "../dropDown/dropDown";
import CreateTextInput from "../textInputs/textInput";
import { useState } from "react";
const CreateInputs = ({inputs}) => {

    const [showInputsField, setShowInputsField] = useState([]);
    const [inputsTypes, setInputsTypes] = useState([]);

    const inputTypesHandler = (id, type) => {
        setInputsTypes([...inputsTypes, { id: id, value: type }]);
    }

       // ADD BUTTON HANDLER
       const addInputHandler = (id) => {
        const Input = inputsTypes.filter((input) => input.id === id);
        if (Input.length === 0) {
            setInputsTypes([...inputsTypes, { id: id, value: 'text' }]);
            setShowInputsField([...showInputsField, { id: id, show: true, type: 'text' }]);
            return;
        }
        setInputsTypes([...inputsTypes, { id: id, value: Input[0].value }]);
        setShowInputsField([...showInputsField, { id: id, show: true, type: 'dropdown' }]);

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
                {showInputsField.map((field) => field.id === fieldId && field.show === true && field.type === 'text' && <CreateTextInput id={fieldId} fieldset={`Input-${i + 1}:`}/>)}
                {showInputsField.map((field) => field.id === fieldId && field.show === true && field.type === 'dropdown' && <CreateDropDown/>)}

            </>
        )
    }
    return inputElements;
}

export default CreateInputs;
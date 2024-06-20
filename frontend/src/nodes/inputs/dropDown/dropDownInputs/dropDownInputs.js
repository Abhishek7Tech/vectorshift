import { useState } from "react";

const CreateDropDownInputs = ({inputs,id, dropDownOptions}) => {
    // const [dropDownInputs, setDropDownInputs] = useState([]);
    // console.log("ID", id);

    // const dropDownInputsHandler = (e) => {
    //     const dropDownInputId = e.target.id;
    //     const value = e.target.value;
    //     const dropDownInput = dropDownInputs.filter((dropDownInput) => dropDownInput.id === dropDownInputId);
    
    //     if (dropDownInput.length < 1) {
    //         setDropDownInputs([...dropDownInputs, {dropDownId: id, id: dropDownInputId, dropDownLabel: value, type: "dropdown"}])
    //         return;
    //     }

    //     const updatedDropDownInput = dropDownInputs.map((dropDownInput) => dropDownInput.dropDownId === id && dropDownInput.id === dropDownInputId ? {dropDownId: id, id: dropDownInputId, dropDownLabel: value, type: "dropdown" } : dropDownInput);
    //     setDropDownInputs(updatedDropDownInput);
    //     console.log("INPUTS", dropDownInputs);
    // }
    const inputElements = [];
    for (let i = 0; i < inputs; i++) {

        const fieldId = `create-dropdown-inputs-${i + 1}`;
        inputElements.push(
            <>
                <div key={i} className="space-x-4 space-y-4 flex items-baseline">
                    <label for={fieldId} className="text-white font-mono text-lg">Dropdown-option-{i + 1}: </label>
                    <input type="text" id={fieldId} name={id} className="rounded-lg h-8 outline-none p-1" onChange={(e) => dropDownOptions(e)}></input>
                </div>

            </>
        )
    }
    return inputElements;
}

export default CreateDropDownInputs;
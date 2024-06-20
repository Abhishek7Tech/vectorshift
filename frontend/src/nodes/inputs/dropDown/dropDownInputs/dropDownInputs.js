const CreateDropDownInputs = ({inputs}) => {

    const inputElements = [];
    for (let i = 0; i < inputs; i++) {

        const fieldId = `create-dropdown-inputs-${i + 1}`;
        inputElements.push(
            <>
                <div key={i} className="space-x-4 space-y-4 flex items-baseline">
                    <label for={fieldId} className="text-white font-mono text-lg">Dropdown-option-{i + 1}: </label>
                    <input type="text" id={fieldId} name={fieldId} className="rounded-lg h-8 outline-none p-1"></input>
                </div>

            </>
        )
    }
    return inputElements;
}

export default CreateDropDownInputs;
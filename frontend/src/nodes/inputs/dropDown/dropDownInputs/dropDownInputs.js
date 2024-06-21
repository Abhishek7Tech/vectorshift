import { useStore } from "../../../../store";
const CreateDropDownInputs = ({inputs,id}) => {
   
    const dropDownOptionsHandler = useStore((store) => store.setDropDownOptions);

   console.log("I", inputs, id)
    const inputElements = [];
    for (let i = 0; i < inputs; i++) {

        const fieldId = `${id}-dropdown-${i + 1}`;
        console.log("ID", fieldId)
        inputElements.push(
            <>
                <div key={i} className="space-x-4 space-y-4 flex items-baseline">
                    <label for={fieldId} className="text-white font-mono text-lg">Dropdown-option-{i + 1}: </label>
                    <input autoComplete="off" type="text" id={fieldId} name={id} className="rounded-lg h-8 outline-none p-1" onChange={dropDownOptionsHandler}></input>
                </div>

            </>
        )
    }
    return inputElements;
}

export default CreateDropDownInputs;
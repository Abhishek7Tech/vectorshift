import { useState } from "react";
import CreateDropDownInputs from "./dropDownInputs/dropDownInputs";
const CreateDropDown = () => {
    const [addDropDown, setAddDropDown] = useState(false);
    const [dropDownInputs, setDropDownInputs] = useState(1);

    const addDropDownHandler = () => {
        setAddDropDown(true);
    }

    const increaseDropDownHandler = (e) => {
        if (dropDownInputs < 3) {
            setDropDownInputs(dropDownInputs + 1);
        }
    }

    const decreaseDropDownHandler = (e) => {
        if (dropDownInputs > 1) {
            setDropDownInputs(dropDownInputs - 1)
        }
    }

    return (
        <fieldset className="border-[3px] p-4 border-lime-400 rounded-xl space-y-2">
            <legend for="create-handles" className="text-lime-300 font-mono text-lg">Dropdown:  </legend>
            <div className="flex space-x-4">
                <>
                    <label for="create-inputs" className="text-white font-mono text-lg"> Dropdown options: </label>
                    <span className="rounded-lg px-8 py-1 h-[30px] outline-none bg-white text-black font-mono"> {dropDownInputs} </span>
                    <div className="flex space-x-4 items-center">
                        <button type="button" onClick={() => increaseDropDownHandler()} className="font-semibold text-base rounded-lg bg-cyan-200 px-3 py-[2px]">+</button>
                        <button type="button" onClick={() => decreaseDropDownHandler()} className="font-semibold text-base rounded-lg bg-cyan-200 px-[14px] py-[2px]"> - </button>
                        <button type="button" onClick={() => addDropDownHandler()} className="font-semibold rounded-lg bg-cyan-200 px-[14px] py-[2px] text-black">Add</button>
                    </div>
                </>
            </div>
            {addDropDown &&
                <>
                    <div className="flex space-x-11 space-y-2 items-baseline">
                        <label for="input-label" className="text-white font-mono text-lg"> Dropdown label: </label>
                        <input type="text" id="input-label" name="input-label" className="rounded-lg h-8 outline-none p-1"></input>

                    </div>
                    <CreateDropDownInputs inputs={dropDownInputs} />
                </>
            }

        </fieldset>

    )
}

export default CreateDropDown;
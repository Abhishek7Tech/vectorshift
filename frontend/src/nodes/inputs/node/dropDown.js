import { useEffect, useState } from "react";

const DropDown = ({ labels, dropdownOptions }) => {
    console.log(labels, dropdownOptions)
    return (
        <div>
            {
                labels?.map((label) => {
                    return (
                        <div className="flex space-x-4">
                            <label for = {label.label} className="text-white font-medium text-lg">{`${label.label} :`}</label>
                            {/* <select>
                                <option value={dropdown.dropDownLabel}>{dropdown.dropDownLabel}</option>
                            </select> */}
                                <select className="rounded-lg px-4 h-[30px] outline-none w-max">
                            {
                                dropdownOptions?.map((options) => {
                                    if(options.forLabel === label.label) {
                                        return (
                                            <option value={options.dropDownLabel} className="rounded-lg mx-4 px-1 h-[30px] outline-none">{options.dropDownLabel}</option>
                                        )
                                    }
                                })
                            }
                            </select>       
                        </div>

                    )
                })
            
            }
        </div>
    )                               
}

export default DropDown;
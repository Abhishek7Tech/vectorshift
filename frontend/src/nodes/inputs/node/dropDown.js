import { useEffect, useState } from "react";

const DropDown = ({ labels, dropdownOptions }) => {
    console.log(labels, dropdownOptions)
    return (
        <div>
            {
                labels?.map((label) => {
                    return (
                        <div>
                            <label for = {label.label}>{label.label} : </label>
                            {/* <select>
                                <option value={dropdown.dropDownLabel}>{dropdown.dropDownLabel}</option>
                            </select> */}
                                <select>
                            {
                                dropdownOptions?.map((options) => {
                                    if(options.forLabel === label.label) {
                                        return (
                                            <option value={options.dropDownLabel}>{options.dropDownLabel}</option>
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
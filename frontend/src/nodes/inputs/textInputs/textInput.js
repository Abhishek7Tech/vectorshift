
const CreateTextInput = ({id, fieldset, textHandler}) => {
    let i = 0;
    
    return (
        <fieldset className="border-[3px] p-4 border-lime-400 rounded-xl space-y-2">
            <legend for="create-handles" className="text-lime-300 font-mono text-lg">{fieldset} </legend>
            <div>
                <label for={id} className="text-white font-mono text-lg">Enter Text: </label>
                <input type="text" id={id} name={id} className="rounded-lg h-8 outline-none p-1" onChange={(e) => {textHandler(e)}}></input>

            </div>

        </fieldset>

    )
}

export default CreateTextInput;
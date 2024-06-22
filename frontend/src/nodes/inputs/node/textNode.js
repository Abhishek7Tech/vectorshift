const TextNode = ({ data }) => {
    console.log("DATA", data)
   
    return (
        <div>
            {
                data?.map((inputs, idx) => {
                    return (
                        <div key={idx} className="flex space-x-3 ">
                            <label for={inputs.value} className="text-white font-medium text-lg">{`${inputs.value} :`} </label>
                            <input type={inputs.type} value={'{{input}}'} className="rounded-lg h-8 outline-none p-1"></input>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TextNode;
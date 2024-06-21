const TextNode = ({ data }) => {
    console.log("DATA", data)
   
    return (
        <div>
            {
                data?.map((inputs, idx) => {
                    return (
                        <div key={idx}>
                            <label for={inputs.value}>{inputs.value}</label>
                            <input type={inputs.type} value={'{{input}}'}></input>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TextNode;
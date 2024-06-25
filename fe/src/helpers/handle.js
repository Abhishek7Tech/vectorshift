export const createHandlers = (id, idType='system', handlePosition = 'right', pointOffset=150, handleType ='source') => {

    const handlerPosition = setHandlePositions(handlePosition); 
    const handleId = setHandleId(id, idType);
    return (
        <Handle
        type={handleType}
        position={handlerPosition}
        id={handleId}
        style={{top: `${pointOffset/3}%`}}
        />
    )
}
// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
    const nodes = useStore((store) => store.nodes);
    const edges = useStore((store) => store.edges);
    const API_URL = 'http://127.0.0.1:8000/pipelines/parse';

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nodes, edges);

        if(nodes.length > 0 || edges.length > 0) {
        const pipeline = {nodes, edges};
            try{
                const req = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(pipeline)
                })

                if(req.ok) {
                    const data = await req.json();
                    console.log("DATA", data)
                }

            }catch(err) {
                console.log("SOMETHING WENT WRONG", err);
            }
        }
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
}

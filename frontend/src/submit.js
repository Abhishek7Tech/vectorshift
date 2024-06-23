// submit.js
import { useStore } from "./store";
import axios from 'axios';
export const SubmitButton = () => {
    const nodes = useStore((store) => store.nodes);
    const edges = useStore((store) => store.edges);
    

    const API_URL = 'http://127.0.0.1:8000/pipelines/parse';

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const pipeline = {nodes, edges };

        try {
            const response = await axios.post(API_URL, pipeline, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            if (response.status === 200) {
                const { num_nodes, num_edges, is_dag } = await response.data;
                const message = `👽 -> num_nodes: ${num_nodes}  \n 🐼 -> num_edges: ${num_edges} \n ⛄ -> is_dag: ${is_dag} `
                alert(message)
                console.log("DATA", num_nodes, num_edges, is_dag)
            } else {
                alert("Something went wrong!!")
            }

        } catch (err) {
            console.log("SOMETHING WENT WRONG", err);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
}

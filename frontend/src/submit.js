// submit.js
import { useStore } from "./store";
import CreateNode from "./components/createNodes";
import axios from 'axios';
export const SubmitButton = () => {
    const nodes = useStore((store) => store.nodes);
    const edges = useStore((store) => store.edges);
    console.log("NODE", nodes)

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
        <div className="flex w-fit mx-auto space-x-8">
            <CreateNode />
           
            <button type="submit" className="bg-blue-400 text-white w-fit mx-auto px-2 py-1 pb-1 rounded-md hover:bg-black" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
}

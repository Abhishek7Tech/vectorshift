import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import CreateNode from './components/createNodes';
import RootNode from './rootnode/root';
import Node from './nodes/inputs/node/node';
import { useStore } from './store';
function App() {
  const formState = useStore((state) => state.form);
  
  return (
    <div>
      <PipelineToolbar />
    {/* {formState &&  <RootNode/>} */}
    <RootNode/>
      <Node/>
      <PipelineUI />
      <CreateNode />
      <SubmitButton />
    </div>
  );
}

export default App;

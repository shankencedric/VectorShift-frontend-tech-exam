import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#F9F9F6] overflow-hidden">
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;

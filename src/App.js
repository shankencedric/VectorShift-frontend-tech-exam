import { PipelineToolbar } from './components/toolbar';
import { PipelineUI } from './components/ui';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#F9F9F6] overflow-hidden">
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;

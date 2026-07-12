// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nodes, edges })
      });
    
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      alert(
        `🚀 Pipeline Analysis Complete!\n` +
        `--------------------------------\n` +
        `📦 Total Nodes: ${data.num_nodes}\n` +
        `🔗 Total Edges: ${data.num_edges}\n` +
        `🔄 Is it a valid DAG? ${data.is_dag ? '✅ Yes (No loops)' : '❌ No (Infinite cycle detected)'}`
      );
    } catch (error) {
      console.error("Submission failed:", error);
      alert(`⚠️ Could not connect to the backend. Make sure your Python FastAPI server is running on port 8000!`);
    }
  }

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="
        px-6 py-2 min-w-[140px]
        text-xs font-medium text-white bg-vs-dark
        tracking-wider uppercase rounded-sm
        border border-vs-dark shadow-xs
        cursor-pointer select-none
        hover:bg-vs-dark/90 hover:border-vs-dark
        active:scale-[0.99]
        transition-all duration-150 ease-in-out
      "
    >
      Submit Pipeline
    </button>
  );
};
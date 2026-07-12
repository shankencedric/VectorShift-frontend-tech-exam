// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
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
        `Pipeline Analysis Complete! 🍻\n` +
        `-----------------------------------\n` +
        `${data.is_dag ? '✅ Graph submitted is a valid DAG (no cycles detected).' : '❌ Graph submitted is an invalid DAG (cycle detected).'}\n` +
        `🔢 Graph data: ${data.num_nodes} nodes, ${data.num_edges} edges`
      );
    } catch (error) {
      console.error("Submission failed:", error);
      alert(
        `Pipeline Analysis Failed... 🥀\n` +
        `-----------------------------------\n` +
        `Could not reach the backend. Please verify that your Python FastAPI server is running on port 8000.`
      );
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
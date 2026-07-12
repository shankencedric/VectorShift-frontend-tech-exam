# Pipeline Graph Editor

This project is a full-stack node-based pipeline editor. It allows users to build, connect, and analyze dynamic data pipelines using React Flow on the frontend and FastAPI on the backend.

## 🚀 Implementation Details

### Part 1: Architecture & Node Abstraction
To ensure scalability and clean code, the canvas architecture relies on a shared `NodeBase` component. This prevents repetitive boilerplate and standardizes how handles and styles are applied across the graph. 

Five distinct nodes were built to prove the architecture:
* **Attachment Node:** 1 output.
* **Comment Node:** 0 inputs, 0 outputs (strictly for canvas annotation).
* **Decoder Node:** 1 input, 1 output.
* **Encoder Node:** 1 input, 1 output.
* **Flex Node:** A multipurpose testing node featuring 3 static inputs, 5 static outputs, and support for all input types (text, selects, etc.).

### Part 2: Styling & UI Refinement
* **High-Contrast Theme:** Configured custom Tailwind variables (`vs-dark` for structural elements and a carefully adjusted `vs-gold` for highlights) to ensure high visibility and a premium interface.
* **CSS Handle Overrides:** Extracted raw style objects into clean Tailwind utility classes to manage dynamic handle borders seamlessly.

### Part 3: Text Processing & Dynamic Variables
* **Auto-Resizing Text Areas:** Built a custom `FlexibleTextArea` component that recalculates its height dynamically based on user input, removing native scroll friction.
* **The `useVariableParser` Hook:** Extracted Regex parsing logic into a shared custom hook to strictly follow the DRY principle. Any node can now instantly support dynamic `{{variable}}` handle generation by importing this single hook.
* **Phantom Edge Sweeper:** Built a custom React Flow cleanup routine inside the `useVariableParser` hook. If a user deletes a `{{variable}}` that has an active connection wire attached to it, this sweeper automatically detects the orphaned target and sweeps the edge from the global Zustand store to prevent silent cycle-detection failures.

### Part 4: Backend Integration & Graph Analysis
The frontend communicates directly with a Python/FastAPI backend to analyze the graph topology.
* **Topological Sorting:** The `/pipelines/parse` endpoint ingests the JSON payload of nodes and edges, builds an adjacency list and in-degree map, and applies Kahn's Topological Sorting Algorithm to calculate whether the graph is a valid Directed Acyclic Graph (DAG).
* **Clean Feedback:** Returns the `num_nodes`, `num_edges`, and `is_dag` boolean to the frontend, which triggers a clean, structured alert displaying the analysis results.

---

## 💻 Tech Stack
* **Frontend:** React, React Flow, Zustand (Global State), TailwindCSS
* **Backend:** Python, FastAPI, Pydantic

---

## 🛠️ Local Setup Instructions

You will need two terminal windows to run the frontend and backend simultaneously.

### 1. Start the Backend
Open a terminal in the `/backend` directory (currently outside this repository) and run:
```bash
pip install fastapi uvicorn pydantic # Install dependencies (only required if you don't have them yet)
uvicorn main:app --reload # Start the server
```
The backend will run on http://localhost:8000.

### 2. Start the Frontend
Open a new terminal in the `/frontend` directory and run:
```bash
npm install # Install dependencies (only required at first boot)
npm start # Start the application
```
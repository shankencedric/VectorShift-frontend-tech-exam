import { useState, useEffect } from 'react';
import { useReactFlow } from 'reactflow';

/**
 * Custom React hook that extracts variables and manages React Flow edges.
 * 
 * 1. Scans text for {{variables}} and returns an array of unique names.
 * 2. Automatically sweeps the global graph state to delete "phantom edges"
 *    if a user deletes a variable that had an edge connected to it.
 *
 * @param {string} nodeId - The unique ID of the node (required for edge cleanup).
 * @param {string} text - The raw text string to scan.
 * @returns {string[]} An array of discovered variable names.
 */
export const useVariableParser = (nodeId, text) => {
    const [dynamicVariables, setDynamicVariables] = useState([]);
    const { getEdges, setEdges } = useReactFlow();
    
    useEffect(() => {
        const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
        const found = [];
        let match;

        while ((match = regex.exec(text || '')) !== null) {
        if (!found.includes(match[1])) 
            found.push(match[1]);
        }

        setDynamicVariables(found);
    }, [text]);

    // cleanup
    useEffect(() => {
        if (!nodeId) return;

        const currEdges = getEdges();
        const validDynamicHandleIds = dynamicVariables.map((name, i) => `${nodeId}-${name}-${i}`);

        const cleanEdges = currEdges.filter((edge) => {
        if (edge.target !== nodeId) return true; // ignore other nodes' edges
        if (edge.targetHandle) // our edge
            return validDynamicHandleIds.includes(edge.targetHandle); // only keep the edge if the variable actually still exists
        return true; 
        })

        // update only if needed
        if (cleanEdges.length !== currEdges.length) 
            setEdges(cleanEdges);
    }, [dynamicVariables, nodeId, getEdges, setEdges]);

    return dynamicVariables;
}
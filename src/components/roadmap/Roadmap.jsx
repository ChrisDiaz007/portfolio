import "./Roadmap.css";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import { nodeTypes, initialNodes, initialEdges } from "./Elements";
import SidePanel from "./SidePanel";
import { TopicContent } from "./Topics";

function ReactFlowDeveloper() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  // right-side panel selection
  const [selectedId, setSelectedId] = useState(null);

  const onNodeClick = useCallback((_evt, node) => {
    setSelectedId(node.id);
  }, []);

  // ESC closes panel
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelectedId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const content = selectedId ? TopicContent[selectedId] : null;

  return (
    <div className="w-full h-[150vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
        nodeTypes={nodeTypes}
        preventScrolling={false}
        defaultEdgeOptions={{ style: { strokeWidth: 3, stroke: "#ffffffff" } }}
        /* 🔒 Freeze everything */
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        edgesUpdatable={false}
        /* 🔒 Lock the viewport */
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        /*Custom Handles */
      />

      {/* Fixed right-side panel */}
      <SidePanel item={content} onClose={() => setSelectedId(null)} />
    </div>
  );
}

const Roadmap = () => {
  //hook
  const refTab = useRef(null);
  // CustomHook(refTab);

  return (
    <section className="roadmap flex flex-col items-center" ref={refTab}>
      <div className="w-full max-w-[1300px] p-5 text-center">
        <h1 className="text-white">Journey</h1>
      </div>
      <div className="w-full max-w-[1300px] p-5">
        <ReactFlowDeveloper />
      </div>
    </section>
  );
};

export default Roadmap;

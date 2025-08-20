import { Handle, Position } from "@xyflow/react";

const LanguageNode = ({ data }) => {
  return (
    <div
      className="rf-default-node"
      style={{ backgroundColor: "white", height: "auto" }}
    >
      {/* incoming (targets) */}
      <Handle id="t-top" type="target" position={Position.Top} />
      <Handle id="t-left" type="target" position={Position.Left} />

      {/* outgoing (sources) */}
      <Handle id="s-left" type="source" position={Position.Left} />
      <Handle id="s-bottom" type="source" position={Position.Bottom} />

      <div style={{ padding: 10 }}>{data.label}</div>
    </div>
  );
};

export default LanguageNode;

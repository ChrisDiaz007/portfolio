import { Handle, Position } from "@xyflow/react";

const CustomHandleDot = ({ data }) => {
  return (
    // prettier-ignore
    <div
      style={{
        padding: "10px 30px",
        border: "3px solid #000000ff",
        borderRadius: 3,
        background: "#b6eee6ff",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold"
      }}
    >
      {data?.label ?? "Node"}

      {/* TOP */}
      <Handle id="s-top" type="source" position={Position.Top} style={{ opacity: 0, pointerEvents: "none" }}/>
      <Handle id="t-top" type="target" position={Position.Top} style={{ opacity: 0, pointerEvents: "none" }}/>

      {/* RIGHT */}
      <Handle id="s-right" type="source" position={Position.Right} style={{ opacity: 0, pointerEvents: "none" }}/>
      <Handle id="t-right" type="target" position={Position.Right} style={{ opacity: 0, pointerEvents: "none" }}/>

      {/* BOTTOM */}
      <Handle id="s-bottom" type="source" position={Position.Bottom} style={{ opacity: 0, pointerEvents: "none" }}/>
      <Handle id="t-bottom" type="target" position={Position.Bottom} style={{ opacity: 0, pointerEvents: "none" }}/>

      {/* LEFT */}
      <Handle id="s-left" type="source" position={Position.Left} style={{ opacity: 0, pointerEvents: "none" }}/>
      <Handle id="t-left" type="target" position={Position.Left} style={{ opacity: 0, pointerEvents: "none" }}/>
    </div>
  );
};

export default CustomHandleDot;

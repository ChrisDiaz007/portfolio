import { Handle, Position } from "@xyflow/react";

const CustomHandleSub = ({ data }) => {
  return (
    // prettier-ignore
    <div className="Custom-Handle-Sub">
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

export default CustomHandleSub;

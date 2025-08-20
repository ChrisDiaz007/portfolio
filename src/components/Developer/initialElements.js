import CustomHandle from "./CustomHandle";
import CustomHandleSub from "./CustomHandleSub";

export const nodeTypes = {
  custom: CustomHandle,
  customSub: CustomHandleSub,
};

// prettier-ignore
export const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "RoadMap" }, type: "custom" },
  { id: "n2", position: { x: -2, y: 100 }, data: { label: "developer" }, type: "custom" },
  { id: "n3", position: { x: -160, y: 220 }, data: { label: "Language" }, type: "custom" },
  { id: "n3a", position: { x: -374, y: 220 }, data: { label: "JavaScript" }, type: "customSub" },
  { id: "n3b", position: { x: -485, y: 220 }, data: { label: "Ruby" }, type: "customSub" },
  { id: "n4", position: { x: 0, y: 350 }, data: { label: "Version Control System" }, type: "custom" },
  { id: "n4a", position: { x: 85, y: 250 }, data: { label: "Git" }, type: "customSub" },
  { id: "n5", position: { x: -479, y: 480 }, data: { label: "Repo Hosting Services" }, type: "custom" },
  { id: "n5a", position: { x: -417, y: 380 }, data: { label: "GitHub" }, type: "customSub" },
  { id: "n6", position: { x: 8, y: 600 }, data: { label: "Relational Databases" }, type: "custom" },
  { id: "n6a", position: { x: 49, y: 500 }, data: { label: "PostgreSQL" }, type: "customSub" },
  { id: "n6b", position: { x: 370, y: 450 }, data: { label: "MySQL" }, type: "customSub" },
  { id: "n7", position: { x: 78, y: 850 }, data: { label: "APIs" }, type: "custom" },
  { id: "n7a", position: { x: 305, y: 750 }, data: { label: "Authentication" }, type: "customSub" },
  { id: "n7b", position: { x: 305, y: 800 }, data: { label: "JWT" }, type: "customSub" },
  { id: "n7c", position: { x: 406, y: 800 }, data: { label: "OAuth" }, type: "customSub" },
  { id: "n7d", position: { x: 305, y: 850 }, data: { label: "Basic Authentication" }, type: "customSub" },
  { id: "n7e", position: { x: 305, y: 900 }, data: { label: "Cookie Authentication" }, type: "customSub" },
  { id: "end", position: { x: 600, y: 1500 }, data: { label: "end" }, type: "custom" },
];

// prettier-ignore
export const initialEdges = [
  { id: "n1-n2", source: "n1", target: "n2" },
  { id: "n2-n3", source: "n2", target: "n3", sourceHandle: "s-left",   targetHandle: "t-top" },

  { id: "n3-n3a", source: "n3", target: "n3a", sourceHandle: "s-left",  targetHandle: "t-right",  style: { strokeWidth: 3, stroke: "#ffffffff", strokeDasharray: "3 9" } },
  { id: "n3-n4",  source: "n3", target: "n4",  sourceHandle: "s-bottom",targetHandle: "t-left" },

  { id: "n4-n4a", source: "n4", target: "n4a", sourceHandle: "s-top",   targetHandle: "t-bottom", style: { strokeWidth: 3, stroke: "#ffffffff", strokeDasharray: "3 9" } },
  { id: "n4-n5",  source: "n4", target: "n5",  sourceHandle: "s-left",  targetHandle: "t-right" },

  { id: "n5-n5a", source: "n5", target: "n5a", sourceHandle: "s-top",   targetHandle: "t-bottom", style: { strokeWidth: 3, stroke: "#ffffffff", strokeDasharray: "3 9" } },
  { id: "n5-n6",  source: "n5", target: "n6",  sourceHandle: "s-right", targetHandle: "t-left" },

  { id: "n6-n6a", source: "n6", target: "n6a", sourceHandle: "s-top",   targetHandle: "t-bottom", style: { strokeWidth: 3, stroke: "#ffffffff", strokeDasharray: "3 9" } },
  { id: "n6-n6b", source: "n6", target: "n6b", sourceHandle: "s-right", targetHandle: "t-left",   style: { strokeWidth: 3, stroke: "#ffffffff", strokeDasharray: "3 9" } },
  { id: "n6-n7",  source: "n6", target: "n7",  sourceHandle: "s-bottom",targetHandle: "t-top" },

  { id: "n7-n7a", source: "n7", target: "n7a", sourceHandle: "s-right", targetHandle: "t-left",   style: { strokeWidth: 3, stroke: "#ffffffff", strokeDasharray: "3 9" } },
];

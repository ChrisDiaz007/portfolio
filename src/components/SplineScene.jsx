import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Spline scene={import.meta.env.VITE_SPLINE_URL} />
    </div>
  );
}

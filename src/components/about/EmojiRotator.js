const EmojiRotator = () => {
  const size = 140;
  const radius = 55;
  const id = "circlePath1";

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ display: "block" }}
      >
        <defs>
          <path
            id={id}
            d={`
              M ${size / 2} ${size / 2}
              m -${radius}, 0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
          />
        </defs>

        <g className="circle-text">
          <text fontSize="14" letterSpacing="6" fontWeight="500">
            <textPath href={`#${id}`} startOffset="0%">
              • FULL • STACK • ENGINEER •
            </textPath>
          </text>
        </g>
      </svg>

      {/* Emoji in center */}
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "48px",
          margin: 0,
        }}
      >
        🧑‍💻
      </p>
    </div>
  );
};

export default EmojiRotator;

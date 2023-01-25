const Grid = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        top: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 300 }).map((_, index) => (
        <div
          key={index}
          style={{
            height: "32px",
            borderBottom: "1px solid rgba(255, 0, 0, 0.2)",
          }}
        />
      ))}
    </div>
  );
};

export default Grid;

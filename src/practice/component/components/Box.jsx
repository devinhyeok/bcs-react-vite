function Box(props) {
  const { backgroundColor, color, isRounded, boxName } = props;

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "200px",
        height: "200px",
        color: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: isRounded ? "0px" : "50px",
      }}
    >
      {boxName}
    </div>
  );
}

export default Box;

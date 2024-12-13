function Counter({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyDirection: "center", gap: "20px" }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>현재 값: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;

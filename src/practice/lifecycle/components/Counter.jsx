import { useEffect } from "react";

function Counter({ count, setCount }) {
  useEffect(() => {
    console.log(`현재 값: ${count}`);

    return () => {
      console.log("Remove");
    };
  }, [count]);

  return (
    <>
      <div>현재 값: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;

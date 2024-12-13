import { useEffect } from "react";

function Timer({ count, setCount }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => setCount(count + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}

export default Timer;

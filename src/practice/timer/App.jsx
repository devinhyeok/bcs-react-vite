import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [count, setCount] = useState(0); // count 상태 유지

  return (
    <div>
      <div>{isShow && <Timer count={count} setCount={setCount} />}</div>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;

import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{isShow && <Counter count={count} setCount={setCount} />}</div>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;

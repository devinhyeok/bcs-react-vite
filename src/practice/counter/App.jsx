import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);

  return (
    <div>
      <Counter count={count0} setCount={setCount0} />
      <Counter count={count1} setCount={setCount1} />
      <Counter count={count2} setCount={setCount2} />
    </div>
  );
}

export default App;

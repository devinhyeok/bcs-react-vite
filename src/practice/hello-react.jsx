import { useState } from "react";

function App() {
  const [isHello, setIsHello] = useState(false);

  return (
    <div>
      <h1>{isHello ? "Hello, React!" : "React is Fun!"}</h1>
      <button onClick={() => setIsHello(!isHello)}>Change Message</button>
    </div>
  );
}

export default App;

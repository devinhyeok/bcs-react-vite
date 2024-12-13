import { useState } from "react";
import Nickname from "./components/Nickname";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="app-container">
      <h1 className="app-title">Change Nickname</h1>
      <div className="input-container">
        <input
          type="text"
          className="nickname-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Nickname name={name} />
    </div>
  );
}

export default App;

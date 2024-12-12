import React from "react";
import "./App.css";
import DateCard from "./DateCard";
import date from "./data.json";

function App() {
  return (
    <div className="app-container">
      <h1>December, 2024</h1>
      <ul className="date-list">
        {date.map((v, i) => (
          <DateCard date={v.date} />
        ))}
      </ul>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import DateCard from "./components/DateCard";
import date from "./data/data.json";

function App() {
  return (
    <div className="app-container">
      <h1>December, 2024</h1>
      <ul className="date-list">
        {date.map((v, i) => (
          <DateCard key={i} date={v.date} todos={v.todos} />
        ))}
      </ul>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import DateCard from "./components/DateCard";
import date from "./data/data.json";

function App() {
  return (
    <div className="app-container">
      <h1>December, 2024</h1>
      <ul className="day-list">
        <li className="day-item">MON</li>
        <li className="day-item">TUE</li>
        <li className="day-item">WED</li>
        <li className="day-item">THU</li>
        <li className="day-item">FRI</li>
        <li className="day-item">SAT</li>
        <li className="day-item">SUN</li>
      </ul>
      <ul className="date-list">
        {date.map((v, i) => (
          <DateCard
            key={i}
            date={v.date}
            todos={v.todos}
            isHoliday={v.isHoliday}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

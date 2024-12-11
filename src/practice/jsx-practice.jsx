import "../App.css";

function App() {
  const programmingLanguages = ["JavaScript", "Python", "Rudy", "C++", "C#"];

  return (
    <div className="app-container">
      <h1 className="title">Favorite Programming Languages</h1>
      <ul className="language-list">
        {programmingLanguages.map((v, i) => (
          <li key={i} className="language-item">
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

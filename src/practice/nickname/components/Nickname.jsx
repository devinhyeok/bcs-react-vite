import "./Nickname.css";

function Nickname({ name }) {
  return (
    <div className="nickname-container">
      <h2 className="nickname-message">
        {name ? `Hello, ${name}!` : "Input your nickname."}
      </h2>
    </div>
  );
}

export default Nickname;

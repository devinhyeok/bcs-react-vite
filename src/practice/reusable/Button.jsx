import "./Button.css";

function Button({ label, onClick = func }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}

function func() {
  alert("asijfhiwf");
}

export default Button;

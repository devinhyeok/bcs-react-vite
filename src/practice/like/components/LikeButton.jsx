import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleToggle = () => {
    setLiked(!liked);
  };

  return (
    <button className="like-button" onClick={handleToggle}>
      {liked ? "🧡" : "🤍"}
    </button>
  );
}

export default LikeButton;

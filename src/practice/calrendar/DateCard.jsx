import "./DateCard.css";
import PropTypes from "prop-types";

function DateCard({ date }) {
  return (
    <li className="date-card">
      <div>{date}</div>
      <ul>
        <li>🧹 청소하기</li>
        <li>🏃‍♀️ 운동하기</li>
        <li>🎲 게임하기</li>
      </ul>
    </li>
  );
}

DateCard.propTypes = {
  date: PropTypes.number.isRequired,
};

export default DateCard;

import React from "react";
import "../style/btn.css";

const Button = ({ text, action, disabled, disableButton }) => {
  return (
    <div className="btn-container">
      <button
        className={`btn ${disabled ? "disabled" : ""}`}
        onClick={action}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

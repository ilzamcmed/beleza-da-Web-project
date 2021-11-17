import React from "react";
import "../style/btn.css";

const Button = ({ text, action }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default Button;

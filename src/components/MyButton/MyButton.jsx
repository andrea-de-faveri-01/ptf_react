import React from 'react';
import "./MyButton.css"

const MyButton = ({ onClick, children = "text", style = "normal", size = "m" }) => {
  return (
    <button onClick={onClick} className={`my-button ${style} ${size}`}>
      {children}
    </button>
  );
};

export default MyButton;
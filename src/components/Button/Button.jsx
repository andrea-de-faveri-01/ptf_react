import React from 'react';
import "./Button.css"

const Button = ({ onClick, children = "text", type = "normal", size = "m" }) => {
  return (
    <button onClick={onClick} className={`button ${type} ${size}`} >
      {children}
    </button>
  );
};

export default Button;
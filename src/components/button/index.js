import React from 'react';
import './button.style.scss';

const Button = ({text, color}) => {
  return <button className={`button ${color}`}>{text}</button>
}

export default Button;
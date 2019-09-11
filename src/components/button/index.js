import React from 'react';
import './button.style.scss';

const Button = ({text, color, ...OtherProps}) => {
  return <button className={`button ${color}`} {...OtherProps}>{text}</button>
}

export default Button;
import React from 'react';
import './custom-input.style.scss';

const CustomInput = ({label, ...otherProps}) => {
  return (
    <div className="custom-input-group">
      <label className="custom-label">{label}</label>
      <input className="custom-input" {...otherProps} />
    </div>
  )
}

export default CustomInput;
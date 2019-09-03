import React from 'react';
import './custom-input.style.scss';

const CustomInput = ({label, handleChange, ...otherProps}) => {
  return (
    <div className="custom-input-group">
      {otherProps.value.length? <label className={`custom-label`}>{label}</label> : null}
      <input className="custom-input" onChange={handleChange} {...otherProps} />
    </div>
  )
}

export default CustomInput;
import React from "react";
import {
  StyledCustomInput,
  CustomInputGroup,
  CustomLabel
} from "./custom-input.style";

const CustomInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <CustomInputGroup>
      {otherProps.value.length ? <CustomLabel>{label}</CustomLabel> : null}
      <StyledCustomInput onChange={handleChange} {...otherProps} />
    </CustomInputGroup>
  );
};

export default CustomInput;

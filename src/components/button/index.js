import React from "react";
import { CustomButton } from "./button.style";

const Button = ({ text, color, ...OtherProps }) => {
  return (
    <CustomButton color={color} {...OtherProps}>
      {text}
    </CustomButton>
  );
};

export default Button;

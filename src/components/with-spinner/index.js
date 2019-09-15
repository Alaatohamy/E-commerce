import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = ComponentToRender => ({ isLoading, ...otherProps }) => {
  console.log("withSpinner", isLoading, ComponentToRender);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <ComponentToRender {...otherProps} />
  );
};

export default WithSpinner;

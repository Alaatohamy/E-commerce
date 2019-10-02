import React from "react";
import Spinner from "components/spinner";

const WithSpinner = ComponentToRender => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <ComponentToRender {...otherProps} />;
};

export default WithSpinner;

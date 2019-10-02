import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.style";
import errorImg from "assets/error.png";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  /** It listen to errors thrown from any child component nested on this component
   * @param {boolean} error - child component error
   * @returns {object} state - setState with the child error
   */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    /** Conditionally render the children or its error */
    return hasError ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={errorImg} />
        <ErrorImageText>
          Sorry something went wrong, check your internet connection please
        </ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;

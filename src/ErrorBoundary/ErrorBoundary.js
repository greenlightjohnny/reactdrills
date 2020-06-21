import React, { Component } from "react";

class ErrorBound extends React.Component {
  state = {
    hasError: false,
    errorMeassage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went terribly wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBound;

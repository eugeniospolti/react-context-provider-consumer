import React, { Component } from "react";
import { ThemeContext } from "./Provider";

export default class ChildComponent extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {state => <div>{state.teste}</div>}
      </ThemeContext.Consumer>
    );
  }
}

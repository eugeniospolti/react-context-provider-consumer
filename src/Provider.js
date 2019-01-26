import React, { Component, createContext } from "react";

const ThemeContext = createContext();

class Provider extends Component {
  state = {
    teste: 1
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default Provider;
export { ThemeContext };

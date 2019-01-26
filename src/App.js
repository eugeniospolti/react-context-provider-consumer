import React, { Component } from "react";
import "./App.css";
import Provider from "./Provider";
import ChildComponent from "./ChildComponent";

class App extends Component {
  render() {
    return (
      <Provider>
        <ChildComponent />
      </Provider>
    );
  }
}

export default App;

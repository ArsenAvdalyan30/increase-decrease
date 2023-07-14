import "./App.css";
import React, { Component } from "react";
import Button from "./components/Button";
import Content from "./components/Content";

class App extends Component {
  state = {
    value: 0,
  };

  handleIncrease = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  resetValue = () => {
    this.setState({ value: 0 });
  };

  render() {
    console.log("render", this.state);
    return (
      <div>
        <Button incDec={this.handleIncrease} text="increase" />
        <Content stateVal={this.state.value} />
        <Button incDec={this.handleDecrease} text="decrease" />
        <Button incDec={this.resetValue} text="reset" />
      </div>
    );
  }
}

export default App;

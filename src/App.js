import React, { Component } from "react";
import Home from "./Home";
class App extends Component {
  state = { count: 0, show: false };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  componentDidMount = () => {
    console.log("mounting");
  };
  componentDidUpdate = () => {
    console.log("update");
  };
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.increment}>+</button>
        {this.state.count}
        <button onClick={this.decrement}>-</button>
        <div>
          <button onClick={this.handleShow}>show</button>
          {this.state.show ? <Home /> : null}
        </div>
      </div>
    );
  }
}
export default App;

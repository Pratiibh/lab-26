import React from "react";
import { connect } from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";
import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increase = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  decrease = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div id="parent">
        <div id="format">
          <button id="increase" onClick={this.increase}>
            Increase
          </button>
          <h4 id="count">{this.state.counter}</h4>
          <button id="decrease" onClick={this.decrease}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

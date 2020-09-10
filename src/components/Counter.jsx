import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  handlePlus = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleMinus = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  reset() {
    this.setState({
      count: 0
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>reset</button>
        <h3>Счетчик: {this.state.count}</h3>
      </div>
    )
  }
}

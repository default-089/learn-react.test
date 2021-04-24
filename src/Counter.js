import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    return (
      <div>
        Счетчик: {this.state.counter}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

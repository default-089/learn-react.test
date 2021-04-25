import React, { Component } from 'react'
import { Button, Box, Typography } from '@material-ui/core';

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
      <Box my={4}>
        <Button variant="contained" color="primary" onClick={this.increment}>+</Button>
        <Button variant="contained" color="secondary" onClick={this.decrement}>-</Button>
        <Button variant="contained" onClick={this.reset}>reset</Button>
        <Typography variant="h3">Счетчик: {this.state.count}</Typography>
      </Box>
    )
  }
}

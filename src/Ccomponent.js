import React, { Component } from 'react';
import Clock from './Clock';

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <h1>Class props number: {this.props.number} & numbers: {this.props.numbers.join(',')}</h1>
        <Clock />
      </div>
    )
  }
}

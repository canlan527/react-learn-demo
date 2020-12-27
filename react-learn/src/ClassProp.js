import React, { Component } from 'react'

export default class ClassProp extends Component {
  static defaultProps = {
    a: 'in',
    b: 'here',
    c: 'now'
  }
  render() {
    return (
      <div>
        <h2>a:{this.props.a} b: {this.props.b} c: {this.props.c} </h2>
      </div>
    )
  }
}

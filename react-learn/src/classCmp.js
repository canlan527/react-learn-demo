import React, { Component } from 'react'

export class ClassCmp extends Component {
  render() {
    return (
      <h1> 这是类组件&nbsp;{this.props.string}</h1>
    )
  }
}
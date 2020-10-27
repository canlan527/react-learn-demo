import React, { Component } from 'react'

export class ClassCmp extends Component {

  constructor(props) {
    super(props);
    // console.log(props, this.props)
  }

  render() {
    if (this.props.enable) {
      return (
        <>
          <h2>可见性为 true</h2>
        </>
      )
    }
    if(this.props.obj) {
      return (
        <>
          <p>姓名： —— {this.props.obj.name}</p>
          <p>年龄： —— {this.props.obj.age}</p>
        </>
      )
    } else if(this.props.ui) {
      return  this.props.ui
    }
    return (
      <h1> 这是类组件  ，数字是：{this.props.number}</h1>
    )
  }
}
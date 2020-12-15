import React, { Component } from 'react'

export default class NumberInput extends Component {
  state={
    val: ''
  }
  handleChange = (e) => {
    let val = e.target.value;
    val = val.replace(/\D/g, "") // 将所有的非数字替换成空
    this.setState({
      val
    })
  }
  render() {
    return (
     <input type="text" value={this.state.val} onChange={this.handleChange}/>
    )
  }
}

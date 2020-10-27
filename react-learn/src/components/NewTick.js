// 计时器，用作倒计时
import React, { Component } from 'react'

export default class NewTick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: this.props.number
    }
    this.timer = setInterval(() => {
      this.state.left--;
      // 重新渲染
    }, 1000)
  }
  render() {
    return (
      <h1>
        倒计时剩余时间：{this.props.number}
      </h1>
    )
  }
}

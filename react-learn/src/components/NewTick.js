// 计时器，用作倒计时
import React, { Component } from 'react'

export default class NewTick extends Component {
  // 初始化状态
  state = {// js Nest 语法 目前处于试验阶段
    left: this.props.number
  }
  constructor(props) {
    super(props)
    // this.state = {
    //   left: this.props.number
    // }
    this.timer = setInterval(() => {
      // this.state.left--;
      // 重新渲染
      this.setState({//重新设置参数，自动触发重新渲染
        // mixin
        left: this.state.left-1
      })
      if(this.state.left === 0) { // 停止定时器
        clearInterval(this.timer)
      }
    }, 1000)
    
  }
  render() {
    return (
      <h1>
        倒计时剩余时间：{this.state.left}
      </h1>
    )
  }
}

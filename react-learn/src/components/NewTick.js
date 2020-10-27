// 计时器，用作倒计时
import React, { Component } from 'react'

export default class NewTick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: this.props.number
    }
    this.timer = setInterval(() => {
      // this.state.left--;
      // 重新渲染
      let timer = this.setState({//重新设置参数，自动触发重新渲染
        // mixin
        left: this.state.left-1
      })
      
    }, 1000)
    if(this.state.left === 0) {
      clearInterval(this.timer)
    }
  }
  render() {
    return (
      <h1>
        倒计时剩余时间：{this.state.left}
      </h1>
    )
  }
}

import React, { Component } from 'react'

export default class NewTick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.number
    }
    console.log(this.props) // {number: 10, onOver: ƒ}

    const timer = setInterval(() => {
      this.setState({
        number: this.state.number - 1
      })
      if(this.state.number === 0) {
        clearInterval(timer);
        this.props.onOver && this.props.onOver(); // 调用函数事件
      }
    }, 1000)
  }
  render() {
    return (
      <div>
        <h1>倒计时：{this.state.number}</h1>
      </div>
    )
  }
}

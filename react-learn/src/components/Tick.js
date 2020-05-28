import React, { Component } from 'react'

export default class Tick extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tickNum: this.props.num
    }
    //倒计时
    this.timer = setInterval(() => {
      this.setState({
        tickNum: this.state.tickNum - 1
      })
      if (this.state.tickNum === 0) {
        clearInterval(this.timer)
      }
    }, 1000)
  }


  render() {
    return (
      <div>
        倒计时：{this.state.tickNum}
      </div>
    )
  }
}

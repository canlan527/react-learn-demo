import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {

  state = {
    isOver: false
  }
  constructor(props) {
    super(props)
    this.handleOver = this.handleOver.bind(this)
  }
  handleOver() {
    this.setState({
      isOver: true
    })
  }
  render() {
    let status = this.state.isOver ? '倒计时完成' : '正在倒计时'
    return (
      <div>
        <Tick number={10} onOver={this.handleOver} />
        <h2>{status}</h2>
      </div>
    )
  }
}

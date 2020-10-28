import React, { Component } from 'react'
import NewTick from './NewTick'
export default class NewTickControl extends Component {
  state = {
    isOver: false // 倒计时完成
  }
  render() {
    let status = "正在倒计时";
    if(this.state.isOver) {
      status = "倒计时完成"
    }
    return (
      <div>
        <NewTick number={10} onOver={() => {
          this.setState({
            isOver: true 
          })
        }} />
        <h2>{status}</h2>
      </div>
    )
  }
}

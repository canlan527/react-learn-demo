import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {
  state = {
    isOver: false
  }
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
    // this.handleOver = this.handleOver.bind(this)
  }


  handleOver = () => {
    this.setState({
      isOver: true
    })
  }
  handleClick=() => {
    console.log('点击了')
  }
  render() {
    
    let status = this.state.isOver ? '倒计时完成' : '正在倒计时...'
  
    return (
      <div>
        <Tick
          onClick={this.handleClick}
          onOver={this.handleOver} num={5} />
        <h2>{status}</h2>
      </div>
    )
  }
}

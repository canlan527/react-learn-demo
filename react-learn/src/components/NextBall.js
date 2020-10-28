import React, { Component } from 'react'
import './Ball.css'
export default class NextBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
       left: this.props.left || 0,
       top: this.props.top || 0,
       xSpeed: this.props.xSpeed || 100,
       ySpeed: this.props.ySpeed || 200,
       bgc: this.props.bgc || 'tan'
    }
    const DURATION = 16.66;

    this.timer = setInterval(() => {
      const XDIS = this.state.xSpeed * DURATION / 1000;
      const YDIS = this.state.ySpeed * DURATION / 1000; 
      let newLeft = XDIS + this.state.left;
      let newTop = YDIS + this.state.top;
      if(newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }else if(newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }
      if(newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }else if(newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }
      this.setState({
        left: newLeft,
        top: newTop
      })
    }, DURATION)
  }
  render() {
    return (
      <div className="ball" style={{
        left: this.state.left,
        top:this.state.top,
        background: this.state.bgc
      }}>
        
      </div>
    )
  }
}

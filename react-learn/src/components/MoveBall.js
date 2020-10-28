//小球组件 要求自动移动 需要有自己的状态 比如坐标、速度，因此做成类组件
import React, { Component } from 'react'
import './Ball.css';
export default class MoveBall extends Component {
  constructor(props) {
    super(props);
    // 属性中需要分别传递横纵坐标的速度，每秒移动的像素值
    // props.xSpeed props.ySpeed
    // 组件自己的状态值，
    this.state = {
      left: this.props.left || 0, // 横坐标
      top: this.props.top || 0, // 纵坐标
      bg: this.props.bg || '#f40', // bgcolor
      xSpeed: this.props.xSpeed,
      ySpeed: this.props.ySpeed,
    }
    const duration = 16.66;// 间隔毫秒数

    setInterval(() => {
      // 根据速度，改变left和top值
      const xDis = this.state.xSpeed * duration / 1000; // 间隔时间内 x 方向上移动的距离
      const yDis = this.state.ySpeed * duration / 1000; // 间隔时间内 y 方向上移动的距离

      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      if(newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed // 横坐标反向
        })
      } else if(newLeft >=document.documentElement.clientWidth - 100) { // 视口的宽度
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed // 横坐标反向
        })
      }

      // 纵坐标
      if(newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed // 横坐标反向
        })
      } else if(newTop >=document.documentElement.clientHeight - 100) { // 视口的宽度
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed // 横坐标反向
        })
      }
      // 正常情况
      this.setState({
        left: newLeft,
        top: newTop
      })
    }, duration)
  }
  render() {
    return (
      <div className="ball" style={{
        left: this.state.left,
        top: this.state.top,
        background: this.state.bg
      }}>
        
      </div>
    )
  }
}

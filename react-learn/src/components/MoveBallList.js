// 由于可能维护 MoveBall ,所以用类组件
import React, { Component } from 'react'
import MoveBall from './MoveBall'
import {getRandom} from './newUtils'
/**
 * 每隔一段时间吗，自动生成一个小球，各种数据随机
 */
export default class MoveBallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfoes: []//每隔小球的属性对象
    }
    const timer = setInterval(() => {
      const info = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(20,500),
        ySpeed: getRandom(20,500),
        bg: `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
      };
      this.setState({
        ballInfoes:[...this.state.ballInfoes,info]
      })
      if(this.state.ballInfoes.length === 10) {
        clearInterval(timer);
      }
    }, 1000)
  }
  render() {
    const ballList = this.state.ballInfoes.map ((item, i) => <MoveBall key={i} {...item} />)
    console.log(ballList)
    return (
      <>
        {ballList}
      </>
    )
  }
}

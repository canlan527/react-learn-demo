import React, { Component } from 'react'
import NextBall from './NextBall'
import {getRandom} from './netxUtils'
export default class NextBallList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ballInfos: []
    }
    this.timer = setInterval(() => {
      const infos = {
        left: getRandom(20,800),
        top: getRandom(100,400),
        xSpeed: getRandom(20, 200),
        ySpeed: getRandom(30, 300),
        bgc: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
      }
      this.setState({
        ballInfos: [...this.state.ballInfos, infos]
      })
      if(this.state.ballInfos.length > 20) {
        clearInterval(this.timer)
      }
    }, 2000)
  }
  render() {
    const ballList = this.state.ballInfos.map((item, i)=> <NextBall key={i} {...item} />)
    console.log(ballList)
    return (
      <>
       {ballList} 
      </>
    )
  }
}

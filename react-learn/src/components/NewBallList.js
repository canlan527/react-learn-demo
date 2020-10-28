import React, { Component } from 'react'
import {getRandom} from './theUtil'
import NewBall from './NewBall'

export default class NewBallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfos: [] 
    }
    const timer = setInterval(() => {
      const infos = {
        left: getRandom(0,700),
        top: getRandom(30,300),
        xSpeed: getRandom(0,300),
        ySpeed: getRandom(0,300),
        bgc: `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
      }

      this.setState({
        ballInfos: [...this.state.ballInfos, infos]
      })
      if(this.state.ballInfos.length > 10) {
        clearInterval(timer)
      }
    },1000)
  }
  render() {
    const ballList = this.state.ballInfos.map((item, i) => <NewBall key={i} {...item} />)
    console.log(ballList)
    return (
      <>
       {ballList} 
      </>
    )
  }
}

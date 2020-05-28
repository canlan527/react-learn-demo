import React, { Component } from 'react'
import Ball from './Ball'
import getRandom from '../utils'
export default class BallList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ballList: []
    }
    const timer = setInterval(() => {
      const info = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(50, 300),
        ySpeed: getRandom(50, 300),
        bgc: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
      }
      this.setState({
        ballList: [...this.state.ballList, info]
      })
      if (this.state.ballList.length === 10) {
        clearInterval(timer)
      }
    }, 1000)
  }
  render() {
    const balls = this.state.ballList.map((item, index) => <Ball key={index} {...item} />)
    return (
      <div>
        {balls}
      </div>
    )
  }
}

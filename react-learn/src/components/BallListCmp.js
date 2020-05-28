import React, { Component } from 'react'
import BallCmp from './BallCmp'
import {random} from '../utilsRandom'
export default class BallListCmp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BallList: []
    }

    const timer = setInterval(() => {
      const info = {
        left: random(0, document.documentElement.clientWidth - 100),
        top:random(0, document.documentElement.clientHeight - 100),
        xSpeed: random(100,200),
        ySpeed: random(100, 200),
        bgc: `rgb(${random(255,0)}, ${random(255,0)},  ${random(255,0)})`
      }
      this.setState({
        BallList: [...this.state.BallList, info]
      })
      if(this.state.BallList.length === 10) {
        clearInterval(timer)
      }
    }, 1000);
  }
  
  render() {
    const ballArr = this.state.BallList.map((item,index) => <BallCmp key={index} {...item} />)
    return (
      <div>
        {ballArr}
      </div>
    )
  }
}

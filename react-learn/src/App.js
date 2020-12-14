import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class App extends Component {
  state = {
    number:0,
    show: true
  }
  handleClick= () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  handleShowFn = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const isShow = this.state.show ? <OldLifeCycle n={this.state.number} /> : null
    return (
      <div>
        {isShow}
        <button onClick={this.handleClick}>click me to add</button>
        <button onClick={this.handleShowFn}>显示 / 隐藏</button>
      </div>
    )
  }
}

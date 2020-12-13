import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    n: 0
  }
  // constructor(props) {
  //   super(props);
  //   setInterval(() => {
  //     this.setState({
  //       n: this.state.n + 1
  //     })
  //     this.setState({
  //       n: this.state.n + 1
  //     })
  //     this.setState({
  //       n: this.state.n + 1
  //     })
  //   }, 1000)
  // }
  handleClick = () => {
    this.setState(cur => {
      return {
        n: cur.n + 1
      }
    })
    this.setState(cur =>({ n: cur.n + 1}))
    this.setState(cur =>({ n: cur.n + 1}))
  }
  render() {
    console.log('render')
    return (
      
      <div>
        <h1>{this.state.n}</h1>
        <p><button onClick={this.handleClick}>click to add</button></p>
      </div>
    )
  }
}

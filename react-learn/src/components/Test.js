import React, { Component } from 'react'
// 单向数据流传递数据
// 状态的改变 导致组件重新渲染，进而导致子组件也回重新渲染
export default class A extends Component {
  state = {
    n: 123
  }
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        n: this.state.n - 1
      })
    }, 1000) 
  }
  render() {
    console.log('A组件重新渲染了')
    return (
      <div>
        <B n={this.state.n}></B>
      </div>
    )
  }
}


function B (props) {
  return (
    <div>
      B组件：{props.n}
      <C n={props.n}></C>
    </div>
  )
}


function C (props) {
  return (
    <div>
      C组件：{props.n}
    </div>
  )
}

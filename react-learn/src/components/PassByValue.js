import React, { Component } from 'react'

export default class PassByValue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newNum: 200
    }
    setInterval(() => {
      this.setState({
        newNum: this.state.newNum - 1
      })
    }, 1000)
  }
  render() {
    return (
      <div>
        <Pass1 newNum={this.state.newNum} />
      </div>
    )
  }
}

function Pass1(props) {
  return <div>
    PASS1 {props.newNum}
    <Pass2 newNum={props.newNum}></Pass2>
  </div>

}

function Pass2(props) {
  return <div>
    PASS2 {props.newNum}
  </div>
}
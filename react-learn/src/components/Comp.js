import React, { Component } from 'react'

export default class Comp extends Component {
  state = {
    show: true
  }
  constructor(props) {
    super(props);
    this.txtInput = React.createRef();// 创建一个引用
    this.next = { // 通过对象.current的方式创建一个引用next
      current:null
    }
    this.txt = {
      current: null
    }
  }
  componentDidMount() {
    console.log('didMount',this.txt)
  }

  handleClick = () => {
    // this.txt.focus()
    this.setState({
      show: !this.state.show
    })
  }
  getRef = (el) => {
    console.log('函数被调用了',el)
    this.txt = el
  }
  render() {
    return (
      <div>
        <br/>
        { this.state.show && <input type="text" ref={this.getRef} /> }
        
        <button onClick={this.handleClick}>显示/隐藏</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Modal from './common/Modal'
import img1 from './1.jpg'
export default class Test extends Component {
  state = {
    showModal: false
  }
  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  render() {
    console.log(this.state.showModal)
    return (
      <div>
        <img src={img1} alt=""/>
       { this.state.showModal ?
        (<Modal bg='rgba(255,255,255,0.3)' onClose={this.handleModal}>
          <h1>这是我要传递的内容</h1>
          <h1>THIS IS THE CONTENT</h1>
          <button onClick={this.handleModal}>关闭蒙层</button>
        </Modal>): 
        null}
        <button onClick={this.handleModal}>展示蒙层</button>
      </div>
    )
  }
}

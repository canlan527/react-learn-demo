import React, { Component } from 'react'

export default class OldLifeCycle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      n: this.props.n,
    }
    console.log('constructor','一个新的组件诞生')
  }
  
  componentWillMount(){
    console.log('componentWillMount', '组件即将被挂载')
  }
  componentDidMount() {
    this.setState({
      n: this.state.n +3
    })
    console.log('componentDidMount','组件挂载完毕')
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps','接收到新的属性值',nextProps)
  }
  shouldComponentUpdate(nextProps, nextState) {
   console.log('shouldComponentUpdate','是否应该重新渲染')
   console.log(this.props, nextProps)
   console.log(this.state, nextState)
   //性能判断
   if(this.props.n === nextProps.n && this.state.n === nextState.n) {
    return false;
   }
   return true; 
  }
  handleClick = () => {
    this.setState({
      n: this.state.n + 1
      // n: 3
    })
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', '即将重新渲染组件')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', '组件已经完成重新渲染', prevProps, prevState)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount', '组件被销毁')
  }
  render() {
    console.log('render','渲染，返回的React元素会被挂载到虚拟DOM树中')
    return (
      <div>
        <h1>旧版生命周期React@16.0.0以前</h1>
        <h2>属性n: {this.props.n}</h2>
        <h2>状态n: {this.state.n}</h2>
        <button onClick={this.handleClick}>点击状态+1</button>
      </div>
    )
  }
}

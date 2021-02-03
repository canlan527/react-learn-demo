import React, { Component } from 'react'
import PropTypes from 'prop-types'

const types = {
  a: PropTypes.number,
  b: PropTypes.string.isRequired,
  onChangeA: PropTypes.func
}

function ChildA(props, context) {
  return (
    <div>
      <h1>ChildA:获取上下文的数据 a: {context.a} </h1>
      <ChildB />
    </div>
  )
}
ChildA.contextTypes = types;

class ChildB extends Component{
  /**
   * 声明需要使用哪些上下文中的数据
   */
  // static contextTypes = {
  //   a: types.a
  // }
  static contextTypes = types;
  constructor(props,context) {
    // super(props);
    // console.log(context);
    super(props, context);// 将参数的上下文交给父类处理
    console.log(this.context);
  }
  render() {
    console.log(this.context);
    return  <p>
      ChildB：来自于上下文的数据 a: {this.context.a}
     
      <button onClick={() => {
        this.context.onChangeA(this.context.a + 2);
      }}>变成newA</button>
      
       </p>
  }

}

export default class OldContext extends Component {

  /**
   * 约束了上下文中的数据类型
   */
  static childContextTypes = types

  state = {
    a: 123,
    b: 'abc',
    onChangeA: (newA) => {
      this.setState({
        a: newA
      })
    }
  }

  /**
   * 得到上下文的数据
   */
  getChildContext() {
    // console.log('getChildContext');
    // return {
    //   a: 8,
    //   b: 'xyz'
    // }
    console.log("获取新的上下文");
    return this.state;
  }

  render() {
    // var obj = this.getChildContext();// 可以在这里直接调用函数
    return (
      <div>
        <ChildA />
        <button onClick={() => {
          this.setState({
            a: this.state.a + 1
          })
        }}>a+1</button>
      </div>
    )
  }
}

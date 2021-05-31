import React, { Component } from 'react'

// 创建一个上下文对象
const ctx = React.createContext();

function ChildA(props) {
  return (
    <div>
      <h1>ChildA</h1>
      <h2>
        <ctx.Consumer>
          {value => <> {value.a}, {value.b} </>}
        </ctx.Consumer>
      </h2>
    </div>
  )
}

class ChildB extends Component {
  static contextType = ctx; // 赋值 ctx
  render() {
    return (
      <p>
        ChildB,来自于上下文的数据： a:{this.context.a},b: {this.context.b}
        <button onClick={() => {
          this.context.changeA(this.context.a+100)
        }}
        >后代组件的按钮，点击a加100</button>
      </p>
    )
  }
}

export default class NewContext extends Component {

  state = {
    a: 0,
    b: 'abc',
    changeA: (newA) => {
      this.setState({
        a: newA
      })
    }
  }

  render() {
    const Provider = ctx.Provider;
    return (
      <ctx.Provider value={this.state}>
        <div>
          <ChildA></ChildA>
          <button onClick={() => {
            this.setState({
              a: this.state.a + 1
            })
          }}>父组件的按钮，a加1</button>
        </div>
      </ctx.Provider>
    )
  }
}

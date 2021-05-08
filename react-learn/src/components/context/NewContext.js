import React, { Component } from 'react'

// 创建一个上下文对象
const ctx = React.createContext();

export default class NewContext extends Component {

  state = {
    a: 0,
    b: 'abc'
  }

  render() {
    const Provider = ctx.Provider;
    return (
      <ctx.Provider value={this.state}>
        <div>
        
        </div>
      </ctx.Provider>
    )
  }
}

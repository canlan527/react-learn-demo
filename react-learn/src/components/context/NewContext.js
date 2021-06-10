import React, { Component } from 'react'

// 创建一个上下文对象
const ctx1 = React.createContext();
const ctx2 = React.createContext();
ChildA.datas = {
  a: 789,
  c: 'hello'
}
function ChildA(props) {
  const Provider = ctx2.Provider;
  let obj = {
    a: 7777,
    c: 'rinimabi'
  }
  return (
    <ctx2.Provider value={obj }>
      <div>
        <h1>ChildA</h1>
        <h2>
          <ctx1.Consumer children={value => <> {value.a}, {value.b} </>}>
          </ctx1.Consumer>
        </h2>
        <ChildB></ChildB>
      </div>
    </ctx2.Provider>
  )
}

class ChildB extends Component {
  shouldComponentUpdate() {
    console.log('运行了优化')
    return false;
  } 
  render() {
    return (
     <ctx1.Consumer>
        {value => 
        <>
        <p>
            ChildB,来自于上下文的数据： a:{value.a},b: {value.b}
            <button onClick={() => {
              value.changeA(value.a+100)
            }}
            >后代组件的按钮，点击a加100</button>
          </p>
          <p>
          <ctx2.Consumer>
            {
              val => (
                <>
                  来自ctx2的数据： a:{val.a}, c: {val.c}
                </>
              )
            }
          </ctx2.Consumer>
        </p>

        </>
        
         
        }
        
     </ctx1.Consumer>
    )
  }
}

export default class NewContext extends Component {

  state = {
    ctx: {
      a: 0,
    b: 'abc',
    changeA: (newA) => {
      this.setState({
        a: newA
      })
    }
    }
  }

  render() {
    const Provider = ctx1.Provider;
    return (
      <ctx1.Provider value={this.state.ctx}>
        <div>
          <ChildB></ChildB>
          <button onClick={() => {
            this.setState({})
          }}>父组件的按钮，a加1</button>
        </div>
      </ctx1.Provider>
    )
  }
}

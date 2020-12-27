import React, { Component } from 'react'
import Validation, {A, B} from './Validation'
import G from './G'
export default class App extends Component {
  onFunc=() => {
    console.log('func')
  }
  render() {
    const obj = {
      age:20,
      number:20000
    }
    const mObj = {
      name:'小明',
      age: 20,
      behavior: {
        innerA: 'innerValue A',
        innerB: {
          
        },
      },
      str: '不受约束的值'
    }
    return (
      <div>
        <Validation a={12} 
          b={' hello b '} 
          // c={true} 
          onclick={this.onFunc}
          d={'我可以是任何类型值'}
          // e={'我是可以被渲染的字符串'}
          // e={<h1>我是可以被渲染的react元素</h1>}
          // e={undefined}
          // e={null}
          e={222}
          f={<h2>我是可以被渲染的react元素</h2>}
          // g={<G />}
          g={G}
          i={new B()}
          // i={new A()}
          j={'female'}
          k={[0,1,2,3,4]}
          l={obj}
          m={mObj}
          score={11}
          // score={11222}
          />
      </div>
    )
  }
}

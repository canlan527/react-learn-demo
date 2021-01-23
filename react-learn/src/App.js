import React, { Component } from 'react'

class A extends Component {
  render() {
    return <h1 ref={this.props.abc}>
              组件A
        <span>{this.props.word}</span>
    </h1>
  }
}

const NewA = React.forwardRef((props, ref) => {
  return <A {...props} abc={ref} />
})
// function A(props,ref) {
//   console.log(props, ref)
//   return <h1 ref={ref}>
//       组件A

//     <span>{props.word}</span>
//   </h1>
// }

// 传递函数组件A, 得到一个新组件NewA
// const NewA = React.forwardRef(A)
export default class App extends Component {

  componentDidMount() {
    console.log(this.ARef)
  }
  
  ARef = React.createRef()
  render() {
    return (
      <div>
       <NewA ref={this.ARef} word={'12312312'} />
       {/* 想得到A组件内部的h1元素 */}
      </div>
    )
  }
}

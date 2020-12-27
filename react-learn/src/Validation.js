import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class A {

}
export class B extends A{

}
export default class Validation extends Component {
  // 先混和属性
  static defaultProps = {
    c: false
  }
  // 在调用相应的函数验证
  static propTypes = {
    a:PropTypes.number.isRequired, // a 属性必须是数字类型，并且必填
    b:PropTypes.string.isRequired,// b 属性必须是字符串类型，并且必填
    c:PropTypes.bool.isRequired,// c 属性必须是bool类型，并且必填
    onclick:PropTypes.func,// onClick 属性必须是函数
    d:PropTypes.any.isRequired,// d 属性可以是任何类型值，但是必须必填 作用：可以设置必填；保持队列整齐，所有对象都在该对象中
    e:PropTypes.node, // e 属性必须是可以渲染的内容
    f:PropTypes.element, // f属性必须是一个react元素
    g:PropTypes.elementType, // g属性必须是一个元素类型
    i:PropTypes.instanceOf(A), // i属性必须是构造函数A的实例,也就是说 i 的原型链上必须有A
    j:PropTypes.oneOf(['male','female']), // j属性必须是数组中的一个
    k:PropTypes.arrayOf(PropTypes.number), // k属性必须是数字数组
    l:PropTypes.objectOf(PropTypes.number),// l属性表示所传对象属性值必须是数字
    m:PropTypes.shape({ // m属性必须是对象，并且满足指定的对象的要求
      name:PropTypes.string,
      age: PropTypes.number,
      behavior: PropTypes.shape({
        innerA: PropTypes.string,
        innerB: PropTypes.object,
      })
    }), 
    /**
     * 
     * @param {*} props 该组件所有的属性
     * @param {*} propName 当前传递的属性名
     * @param {*} componentName 当前组件名
     */
    score: function(props, propName,componentName) {
      console.log(props, propName,componentName)
      let val = props[propName];
      // 验证必填
      if(val === null || val === undefined) {
        return new Error(`invalid prop ${propName} in ${componentName}, ${propName} is Required`)
      }
      // 属性必须是个数字
      if(typeof val !== 'number') {
        return new Error(`${propName} must be a number`)
      }
      //属性值范围0-100
      if(val < 0 || val > 100) {
        return new Error(`${propName} must in the range of 0-100`)
      }
    }
  }
  render() {
    const G = this.props.g
    const IClass = this.props.i
    IClass.say = <p>我是一个A的子类</p>
    const LObj = this.props.l
    const mObj = this.props.m
    return (
      <div>
        {this.props.a}
        {this.props.b}
        {this.props.c}
        <span onClick={this.props.onClick}>func Props</span>
        {this.props.e}
        {this.props.f}
        <G />
        {IClass.say}
        {this.props.j}
        {this.props.k} 
        {/* {this.props.l} */}
        {/* {LObj.age} */}
        {LObj.number}
        {LObj.age}
        {mObj.name}
        {mObj.behavior.innerA}
      </div>
    )
  }
}
 
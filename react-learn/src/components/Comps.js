/*
 * @Author: your name
 * @Date: 2020-12-28 16:11:40
 * @LastEditTime: 2020-12-28 17:21:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn\src\components\Comps.js
 */
import React from 'react'

export class A extends React.Component {
  
  render() {
    return <h1>A:{this.props.a}</h1>
  }
}
export class B extends React.Component {
  
  render() {
    return <h1>B:{this.props.b}</h1>
  }
}
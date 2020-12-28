/*
 * @Author: your name
 * @Date: 2020-12-28 16:30:13
 * @LastEditTime: 2020-12-28 17:21:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn\src\HOC\withLog.js
 */
import React from 'react'
/**
 * 高阶组件
 * @param {*}   Comp 组件
 */
export default function withLog(Comp) {
  // console.log(Comp)
  return class LogWrapper extends React.Component {

    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了,${Date.now()}`)
    }

    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了,${Date.now()}`)
    }


    
    render() {
      return <Comp {...this.props} />
    }
  }
}



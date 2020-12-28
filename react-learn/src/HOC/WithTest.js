/*
 * @Author: your name
 * @Date: 2020-12-28 15:58:08
 * @LastEditTime: 2020-12-28 16:04:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn\src\HOC\withTest.js
 */
import React from 'react'

// 接收一个组件并返回一个组件
export default function WithTest (Comp) {
  return class extends React.Component{
    
  }
}

// 函数组件A
function A() {
  return <h1>这事文本内容</h1>
}
// B就是一个高阶组件
const B = WithTest(A)
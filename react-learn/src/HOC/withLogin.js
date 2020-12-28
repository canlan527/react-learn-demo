/*
 * @Author: your name
 * @Date: 2020-12-28 17:22:46
 * @LastEditTime: 2020-12-28 17:29:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn\src\HOC\withLogin.js
 */


 import React from 'react'

 export default function withLogin(Comp) {

  return function LoginWrapper(props) {
    // 如果登录显示接收的 Comp 组件
    if(props.isLogin) {
      return <Comp {...props}></Comp>
    }
    // 没登录返回 null
    return null;
  }
 }
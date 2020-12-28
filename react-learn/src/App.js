/*
 * @Author: your name
 * @Date: 2020-12-28 15:48:55
 * @LastEditTime: 2020-12-28 17:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn\src\App.js
 */
import React from 'react'
// import WithTest from './HOC/WithTest'
import { A, B } from './components/Comps'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'

// let AComp = withLogin(A)
// AComp = withLog(AComp)
// let BComp = withLogin(B)
// BComp = withLog(BComp)

let AComp = withLog(withLogin(A))
let BComp = withLog(withLogin(B))
export default function App() {
  return (
    <div>
      <AComp isLogin a={1} />
      <BComp isLogin b={2} />
    </div>
  )
}

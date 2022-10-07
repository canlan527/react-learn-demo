import React, { useState } from 'react'

export default function App() {
  console.log('app render');
  // const arr = useState(0); // 使用一个状态，该状态的默认值是 0 
  // const n = arr[0];
  // const setN = arr[1];
  const [n , setN] = useState(0)
  const [visible, setVisible] = useState(true)
  const [data, setData] = useState({x: 1, y: 2})
  const [ , forceUpdate] = useState({})
  return (
    <div>
      {/* 异步 */}
      {n}
      <br />
      <button onClick={() => {
        setN((prevN) => prevN + 1)
        setN((prevN) => prevN + 1)
      }}>点击</button>

      {/* <h1>标题</h1> */}
      {/* <button onClick={() => {
        forceUpdate({})
      }}>点击强制刷新</button> */}
      {/* <h1>x:{data.x}， y:{data.y}</h1>
      <button onClick={() => {
        setData({
          ...data,
          x: data.x + 1
        })
      }}>点击加一</button> */}
     {/* <div style={{display: visible ? 'block' : 'none'}}>
      {n}
        <br />
        <button onClick={() => {
          setN(n+1)
        }}>点击</button>
     </div>
      <br />
      <button onClick={() => {
        setVisible(!visible)
      }}>显示 / 隐藏</button> */}
    </div>
  )
}

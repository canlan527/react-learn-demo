import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import NewTick from './components/NewTick'
// import Tick from './components/Tick'
// import PassByValue from './components/PassByValue'
// import Ball from './components/Ball'
// import BallList from './components/BallList'
import BallListCmp from './components/BallListCmp'
// import BallCmp from './components/BallCmp'
const root = document.getElementById('root')

/* let num = 10;

function start() {
  const timer = setInterval(()=> {
    num--;
    if(num < 0) {
      clearInterval(timer)
      return;
    }
    ReactDOM.render(<NewTick number={num}></NewTick>, root)
  }, 1000);
}
start();
 */
ReactDOM.render(<NewTick number={10}></NewTick>, root)
// ReactDOM.render(
//   <>
//     <BallListCmp />
//     {/* <BallCmp left={300} top={300} xSpeed={100} ySpeed={150} bgc='#333' /> */}
//     {/* <BallList /> */}
//     {/* <Ball width={200} height={200} xSpeed={100} ySpeed={200} bgc='#333' /> */}
//     {/* <Tick num={10}/> */}
//     {/* 传值 */}
//     {/* <PassByValue/> */}
//   </>,
//   root
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import NewTick from './components/NewTick'
// import A from './components/Test.js'
// import Tick from './components/Tick'
// import PassByValue from './components/PassByValue'
// import Ball from './components/Ball'
// import BallList from './components/BallList'
// import BallListCmp from './components/BallListCmp'
// import BallCmp from './components/BallCmp'
// import MoveBall from './components/MoveBall'
// // import MoveBallList from './components/MoveBallList'
// import NewBall from './components/NewBall';
// import NewBallList from './components/NewBallList'
// import NextBall from './components/NextBall'
import NextBallList from './components/NextBallList'

const root = document.getElementById('root')


// ReactDOM.render(<MoveBall xSpeed={100} ySpeed={200} left={100} top={100} bg='#393' />, root)
// ReactDOM.render(<MoveBallList  />, root)
// ReactDOM.render(<NewBall left={100} top={200} xSpeed={200} ySpeed={200} bgc="#e60" />, root)
// ReactDOM.render(<NewBallList />, root)
// ReactDOM.render(<NextBall />, root)
ReactDOM.render(<NextBallList />,root)

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
// ReactDOM.render(<NewTick number={10}></NewTick>, root)
// ReactDOM.render(<A/>,root)
// ReactDOM.render(
//   <A>
//     <BallListCmp />
//     {/* <BallCmp left={300} top={300} xSpeed={100} ySpeed={150} bgc='#333' /> */}
//     {/* <BallList /> */}
//     {/* <Ball width={200} height={200} xSpeed={100} ySpeed={200} bgc='#333' /> */}
//     {/* <Tick num={10}/> */}
//     {/* 传值 */}
//     {/* <PassByValue/> */}
//   </A>,
//   root
// );

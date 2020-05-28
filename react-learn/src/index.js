import React from 'react';
import ReactDOM from 'react-dom';
// import Tick from './components/Tick'
// import PassByValue from './components/PassByValue'
// import Ball from './components/Ball'
// import BallList from './components/BallList'
import BallListCmp from './components/BallListCmp'
// import BallCmp from './components/BallCmp'
const root = document.getElementById('root')
ReactDOM.render(
  <>
    <BallListCmp />
    {/* <BallCmp left={300} top={300} xSpeed={100} ySpeed={150} bgc='#333' /> */}
    {/* <BallList /> */}
    {/* <Ball width={200} height={200} xSpeed={100} ySpeed={200} bgc='#333' /> */}
    {/* <Tick num={10}/> */}
    {/* 传值 */}
    {/* <PassByValue/> */}
  </>,
  root
);

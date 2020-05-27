import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import imgUrl1 from './assets/1.jpg'
import imgUrl2 from './assets/2.jpg'
import imgUrl3 from './assets/3.jpg'

const root = document.getElementById('root')
const imgArr = [imgUrl1, imgUrl2, imgUrl3]
let index = 0
let timer = null

function start() {
  clearInterval(timer)
  timer = setInterval(() => {
    index = (index + 1)% 3
    console.log(index)
    init()
  }, 2000)
}

function stop() {
  clearInterval(timer)
}

function init() {
  ReactDOM.render(
    <img src={imgArr[index]} alt={''} />,
    root
  );
}
init()
start()
root.onmouseenter = function () {
  stop()
}
root.onmouseleave = function () {
  start()
}
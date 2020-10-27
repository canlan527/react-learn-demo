import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import imgUrl1 from './assets/1.jpg';
import imgUrl2 from './assets/2.jpg';
import imgUrl3 from './assets/3.jpg';

let index = 0;
let imgArr = [imgUrl1,imgUrl2,imgUrl3];

let timer = null;
const root = document.getElementById('root');

function render () {
    ReactDOM.render(<img src={imgArr[index]}></img>, root);
}
/**
 * 启动计时器
 */
function start() {
    stop();
    timer = setInterval(() => {
        index = (index +1) % 3;
        render();
    }, 2000)
}
/**
 * 清空计时器
 */
function stop() {
    clearInterval(timer);
}

render();
start();

root.onmouseenter = function() {
    stop();
}
root.onmouseleave = function() {
    start();
}
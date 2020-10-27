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
let h2 = (<>
    <h2>这是h2标签</h2>
    <p>这是P标签</p>
</>)
const a = 1234, b= 4321;
let img00 =(
    <>
    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=84641786,3987969250&fm=26&gp=0.jpg" alt="" />
    </>
)
// let obj = {
//     a: 0,
//     b: 1
// }

let reactEleObj = <span>这是react元素对象</span>

let arr = [1,3,4,5,6]
let newArr = [1, null, false, undefined, 2];
const numbers = new Array(30);
numbers.fill(0);
// 生成一个数组
var lis = numbers.map((item, index) => {
    return (
    <li key={index}>{index}</li>
    )
})
var list = numbers.map((item,i) => (
<li key={i}>{i + 1}</li>
))
function start() {
    stop()
    timer = setInterval(() => {
        index = (index + 1) % 3
        console.log(index)
        init()
    }, 2000)
};

function stop() {
    clearInterval(timer)
};

function init() {
    ReactDOM.render( 
        <>
            <img src = { imgArr[index] }alt = { '' } />
            {h2}
            {a} * {b} ={a * b}
            {img00}
            {/* null,undefined,false的值不会渲染 */}
            {null}
            {undefined}
            {false}
            {0}
            {/* 不可以放置普通对象 */}
            {/* {obj} */}
            {reactEleObj}
            {arr}
            
            {newArr}、
            <ul>
            {lis}
            </ul>
            <ul>
                {list}
            </ul>
        </>,
        root
    );
};
init();
start();
root.onmouseenter = function() {
    stop();
};
root.onmouseleave = function() {
    start();
};
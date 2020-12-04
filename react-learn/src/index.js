import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');
// function handleClick() {
//   console.log('点击了')
// }
// const btn = <button onClick={handleClick}>点击我</button>
const btn = <button onClick={() => {
  console.log('点击了')
}}>点击我</button>

ReactDOM.render(btn,root)

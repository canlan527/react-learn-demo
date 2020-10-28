import React from 'react';
import ReactDOM from 'react-dom';
// import Tick from './components/Tick'
// import TickControl from './components/TickControl'
// import Pager from './components/Pager'
// import PagerTest from './components/PageTest'


const root = document.getElementById('root')

// const btn = <button onClick={handleClick}>点击</button>
const btn = <button onClick={() => {
  console.log('点击了')
}} onMouseEnter={(e) => {
  console.log(e)
  console.log('移入了')
}}>点击</button>

function handleClick() {
  alert('点击了')
}

ReactDOM.render(btn, root)













// function handleClick () {
//   console.log('点击了')
// }

// const btn = <button onClick={handleClick}>点击了</button>
// const btn = <button onClick={(e) => {console.log('点击了',e)}}
//   onMouseEnter={() => {console.log('mouseEnter')}}
// >点击了</button>

// ReactDOM.render(btn, root)
// ReactDOM.render(<TickControl />, root)
// ReactDOM.render(<Pager current={5} total={100} limit={9} panelNumber={5} />, root)
// ReactDOM.render(<PagerTest />, root)

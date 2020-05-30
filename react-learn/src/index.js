import React from 'react';
import ReactDOM from 'react-dom';
// import Tick from './components/Tick'
// import TickControl from './components/TickControl'
// import Pager from './components/Pager'
import PagerTest from './components/PageTest'
// function handleClick () {
//   console.log('点击了')
// }

// const btn = <button onClick={handleClick}>点击了</button>
// const btn = <button onClick={(e) => {console.log('点击了',e)}}
//   onMouseEnter={() => {console.log('mouseEnter')}}
// >点击了</button>

const root = document.getElementById('root')
// ReactDOM.render(btn, root)
// ReactDOM.render(<TickControl />, root)
// ReactDOM.render(<Pager current={5} total={100} limit={9} panelNumber={5} />, root)
ReactDOM.render(<PagerTest />, root)

import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp'

const root = document.getElementById('root');

ReactDOM.render(<Comp html={'这是我传递的内容'}>
  <p>这是我要传递的第二个内容</p>
</Comp>,root)
// ReactDOM.render(<Comp html={'这是我传递的内容'}></Comp>,root)

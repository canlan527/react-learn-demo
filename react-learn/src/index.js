import React from 'react';
import ReactDOM from 'react-dom';

let num = 0;
setInterval(() => {
    num ++;
    const div = (<>
        {num}
    </>)
    ReactDOM.render(div, document.getElementById('root'))
},1000);

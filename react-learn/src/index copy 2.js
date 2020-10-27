
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const url = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1711085406,2424687606&fm=26&gp=0.jpg';
const cls = 'image-border'
const div = (<div>
    <img src={url} alt="" className="image-border" style={{
        width:'300px',
        marginLeft: '100px'
    }}/>
</div>)
ReactDOM.render(div, document.getElementById('root'))
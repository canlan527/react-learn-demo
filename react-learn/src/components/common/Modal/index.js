import React from 'react'
import './index.css'
export default function Modal(props) {

  // 默认属性
  const defaultProps = {
    bg: "rgba(0,0,0,0.5)"
  }
  const datas = Object.assign({},defaultProps,props)
  function handleClose(e) {
    console.log(e.target)
    if(e.target.className === 'modal') {
      datas.onClose();
    }
  }
  return (
    <div onClick={handleClose}
      className="modal" style={{
      background:datas.bg
    }}>
      <div className="modal-content">{props.children}</div>
    </div>
  )
}

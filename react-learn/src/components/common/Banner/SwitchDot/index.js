import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class SwitchDot extends Component {

  static propTypes = {
    total: PropTypes.number.isRequired, // 总共点数
    curIndex: PropTypes.number.isRequired, // 当前显示图片的下标
    onChange: PropTypes.func.isRequired,// 事件
  }

  render() {
    const spans = [];
    for(let i = 0; i < this.props.total; i ++) {
      spans.push(<span key={i} className={i === this.props.curIndex ? 'active' : ''}
        onClick={() => {
          this.props.onChange && this.props.onChange(i)
        }}
      ></span>)
    }
    return (
      <div className="dots">
        {spans}
      </div>
    )
  }
}

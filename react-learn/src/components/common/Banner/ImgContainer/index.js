import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

  static defaultProps = {
    imgSrc: [],
    imgWidth: 620,
    imgHeight: 400,
  }

  static propTypes = {
    imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
    imgWidth: PropTypes.number.isRequired, // 单张图片宽度
    imgHeight: PropTypes.number.isRequired,// 单张图片高度
  }

  containerRef = el => {

    this.div = el;
    console.log(this.div)
  }

  /**
   * 切换到第几张图片
   * 调用该函数，此组件会经过一段动画完成切换
   * @param {*} index  图片下标 从0开始
   */
  switchTo (index) {
    // this.div
    // console.log(this.div)
    index = index < 0 ? 0 : (index > this.props.imgSrc.length - 1) ? this.props.imgSrc.length : index;
    // 根据index,计算div的最终marginLeft
    const targetLeft = -index * this.props.imgWidth;
    // 得到当前的marginLeft
    const curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft)
    console.log(index)
    console.log(curLeft, targetLeft)
  }


  render() {
    const imgs =  this.props.imgSrc.map((src, i) => <img width={this.props.imgWidth} height="100%" src={src} alt="" key={i}  />)
    return (
      <div 
        ref={this.containerRef}
        style={{
          width: this.props.imgSrc.length * this.props.imgWidth,
          height: this.props.imgHeight,
          float: 'left',
        }}>
        {imgs}
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

  static propTypes = {
    imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
    imgWidth: PropTypes.number.isRequired, // 单张图片宽度
    imgHeight: PropTypes.number.isRequired,// 单张图片高度
    duration: PropTypes.number.isRequired, // 在多长时间内完成动画切换
  }

  containerRef = el => {

    this.div = el;
    // console.log(this.div)
  }
  tick = 16 // 计时器间隔时间
  timer = null; // 计时器
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
    let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft)
    // this.div.style.marginLeft = targetLeft + 'px';
    // 计算运动的次数
    let times = this.props.duration / this.tick;
    console.log(times)
    let curTimes = 0; // 当前运动的次数
    // 计算每次运动的距离
    const totalDis = targetLeft - curLeft; // 总共运动的距离
    const dis = totalDis / times; // 每次运动的距离
    clearInterval(this.timer)  // 每次开始之前都先停止 防止多次点击触发多个timer  
    this.timer = setInterval(() => { 
      curTimes ++;
      curLeft += dis;
      this.div.style.marginLeft = curLeft + 'px';
      console.log(curTimes, times)
      if(curTimes >= times) {
        this.div.style.marginLeft = targetLeft + 'px'; // 为了防止每次偏差值慢慢扩大,在停止的时候直接设置成目标值
        clearInterval(this.timer) // 停止运动
      }

    }, this.tick)
  }


  render() {
    const imgs =  this.props.imgSrc.map((src, i) => <img width={this.props.imgWidth} height="100%" src={src} alt="" key={i}  />)
    return (
      <div 
        ref={this.containerRef}
        style={{
          width: this.props.imgSrc.length * this.props.imgWidth,
          height: this.props.imgHeight,
        }}>
        {imgs}
      </div>
    )
  }
}

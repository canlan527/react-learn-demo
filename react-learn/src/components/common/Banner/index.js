import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";

export default class Banner extends Component {
  static defaultProps = {
    width: 620,
    height: 400,
    imgSrc: [],
    autoDuration: 3000,
    duration: 500,
  };

  static propTypes = {
    width: PropTypes.number.isRequired, // 容器宽度
    height: PropTypes.number.isRequired, // 容器高度
    imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
    autoDuration: PropTypes.number.isRequired, // 自动切换的间隔时间
    duration: PropTypes.number.isRequired, // 完成一次切换需要的时间
  };

  state = {
    curIndex: 0, // 当前显示的第几张图片
  };

  timer = null; // 自动切换的计时器
  autoSwitch () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      let cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrc.length;
      this.handleSwitch(cur)
    }, this.props.autoDuration)
  }
  componentDidMount() {
    this.autoSwitch();
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  imgConRef = (el) => {
    // console.log(el)
    this.imgContainer = el;
  };
  handleSwitch = (index) => {
    this.setState({
      curIndex: index,
    });
    // 得到ImgContainer的组件对象
    this.imgContainer.switchTo(index);
  };
  handleArrowChange = (type) => {
    let cur = this.state.curIndex;
    // 容错
    if (type === "left") {
      cur--;
      cur = cur < 0 ? (cur = this.props.imgSrc.length - 1) : cur;
    } else if (type === "right") {
      cur++;
      cur = cur > this.props.imgSrc.length - 1 ? 0 : cur;
    }
  
    this.handleSwitch(cur); // 切换新下标
  };

  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
        onMouseEnter={() => {
          clearInterval(this.timer)
        }}
        onMouseLeave={() => {
          this.autoSwitch()
        }}
      >
        <ImgContainer
          ref={this.imgConRef}
          imgSrc={this.props.imgSrc}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
        />
        <SwitchArrow onChange={this.handleArrowChange} />
        <SwitchDot
          total={this.props.imgSrc.length}
          curIndex={this.state.curIndex}
          onChange={this.handleSwitch}
        />
      </div>
    );
  }
}

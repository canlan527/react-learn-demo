import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
    };
    console.log(props);
    this.timer = setInterval(() => {
      this.setState({
        num: this.state.num - 1,
      });
      console.log(this.state.num);
      if (this.state.num === 0) {
        clearInterval(this.timer);
        // 倒计时如果存在就执行 onOver
        props.onOver && props.onOver();
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2 
          onClick={this.props.onClick}
        >{this.state.num}</h2>
      </div>
    );
  }
}

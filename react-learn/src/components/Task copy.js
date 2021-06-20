import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Task.css'
// import { ObjectEqual } from '../utils/helper'

export default class Task extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired, // 任务名称
    isFinish: PropTypes.bool.isRequired, // 任务是否完成
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('task shouldComponentUpdate 运行')
  //   if(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)) {
  //     return false;
  //   }
  //   return true;
  // }
  render() {
    console.log('Task 渲染')
    return (
      <div>
        <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
      </div>
    )
  }
}

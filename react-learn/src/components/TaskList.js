import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

export default class TaskList extends PureComponent {
  // 需要接收任务的数组

  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      isFinish: PropTypes.bool.isRequired
    })).isRequired
  }

  render() {
    console.log('TaskList 渲染')
    const ts = this.props.tasks.map((it,index) => <Task key={index} {...it}></Task>)
    return (
      <ul>
        {ts}
      </ul>
    )
  }
}

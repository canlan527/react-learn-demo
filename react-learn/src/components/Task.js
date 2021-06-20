import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'
import { PureComponent } from 'react'

function Task(props) {
    console.log('Task 渲染')
    return (
        <li className={props.isFinish ? 'finish' : ''}>{props.name}</li>
    )
}

Task.propTypes = {
  name: PropTypes.string.isRequired, // 任务名称
  isFinish: PropTypes.bool.isRequired, // 任务是否完成
}

function memo(FuncComp) {
  return class Memo extends PureComponent{
    render() {
      return <>
        { FuncComp(this.props) }
      </>
    }
  }
}

// export default React.memo(Task)
export default memo(Task)
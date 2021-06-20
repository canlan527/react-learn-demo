import React, { PureComponent } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask';

export default class TaskContainer extends PureComponent {

  state = {
    tasks: [],
  }

  componentDidMount() {
    const ts = [];
    for(let i = 0; i < 10; i++) {
      ts.push({
        name: `任务${i+1}`,
        isFinish: Math.random() > 0.5
      })
    }
    this.setState({
      tasks: ts
    })
  }

  handleAdd = newTask => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  render() {
    console.log('taskContainer 渲染')
    return (
      <div>
        <AddTask onAdd={this.handleAdd}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}

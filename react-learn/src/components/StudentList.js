import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
  render() {
    const stuList = this.props.stud.map(item => <Student key={item.id} {...item}/>)

    return (
      <div>
        <ul>{stuList}</ul>
      </div>
    )
  }
}

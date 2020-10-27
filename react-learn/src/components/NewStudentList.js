import React, { Component } from 'react'
import NewStudent from './NewStudent'
export default class newStudentList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const students = this.props.stud.map(item => <NewStudent key={item.id} {...item}></NewStudent>)
    return (
      <ul>
          {students}
      </ul>
    )
  }
}


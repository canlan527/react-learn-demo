import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'

export default class PageTest extends Component {
  state = {
    current:1,
    total:100,
    limit:10,
    panelNumber:5,
    students: []
  }
  constructor(props) {
    super(props)
    this.getStudentInfo()
  }
  async getStudentInfo() {
    const baseUrl = 'http://open.duyiedu.com'
    const appkey = 'canlan__1551194427551'
    const result = await fetch(`${baseUrl}/api/student/findByPage?appkey=${appkey}&page=${this.state.current}&size=${this.state.total}`)
        .then(resp => resp.json())
        .then(res => res.data)
    this.setState({
      total:result.cont,
      students:result.findByPage
    })
  }
  handlePageChange = (newPage) => {
    this.setState({
      current: newPage
    })
    this.getStudentInfo()
  }
  render() {
    return (
      <div className="contaienr">
        <StudentList stus={this.state.students} />
        <div className="pager">
          <Pager {...this.state} onPageChange={this.handlePageChange}></Pager>
        </div>
      </div>
    )
  }
}

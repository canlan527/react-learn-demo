import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal.js'
export default class PageEvent extends Component {
  state = {
    total: 0,
    current: 1,
    limit: 8,
    panelNumber:5,
    students:[],
    loading: false,
  }
  // 获取数据
  constructor(props) {
    super(props);
    this.fetchDatas() // 获取数据
  }

  async fetchDatas() {
    const baseUrl = 'http://open.duyiedu.com'
    const appKey = 'demo13_1545210570249'
    this.setState({
      loading: true,
    })
    const result = await fetch(`${baseUrl}/api/student/findByPage?appkey=${appKey}&page=${this.state.current}&size=${this.state.limit}`)
              .then(resp => resp.json())
              .then(resp => resp.data)
    this.setState({
      total: result.cont,
      students: result.findByPage,
      loading: false
    })
    
  }


  handleChange = (newPage) => {
    // console.log(newPage)
    this.setState({
      current: newPage
    })
    this.fetchDatas() // 获取数据
  }
  render() {
    return (
      <div className="contianer">
        <StudentList stus={this.state.students} />
        <div className="pager">
          <Pager {...this.state} onChange={this.handleChange} />
        </div>
        <Modal show={this.state.loading} />
      </div>
    )
  }
}

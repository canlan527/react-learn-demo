import React, { Component } from 'react'
import Pager from './Pager'

export default class PageEvent extends Component {
  state = {
    total: 100,
    current: 3,
    limit: 8,
    panelNumber:5,
  }
  handleChange = (newPage) => {
    // console.log(newPage)
    this.setState({
      current: newPage
    })
  }
  render() {
    return (
      <div>
        <Pager {...this.state} onChange={this.handleChange} />
      </div>
    )
  }
}

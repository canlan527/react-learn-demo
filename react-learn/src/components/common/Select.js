import React, { Component } from 'react'

export default class Select extends Component {
  state = {
    selVal: 'beijing'
  }
  render() {
    return (
      <div>
        <select value={this.state.selVal} onChange={(e) => {
          this.setState({
            selVal:e.target.value
          })
        }}>
          <option value="shanghai">上海</option>
          <option value="shenzhen">深圳</option>
          <option value="beijing">北京</option>
        </select>
      </div>
    )
  }
}

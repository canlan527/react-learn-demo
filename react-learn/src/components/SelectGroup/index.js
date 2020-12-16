import React, { Component } from 'react'


/**
 * 一组下拉框
 */
export default class SelectGroup extends Component {

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e) 
  }

  /**
   * 得到一组option
   */
  getOptions() {
    return this.props.datas.map(item => (
     <option value={item.value} key={item.value} >{item.text}</option>
    ))
  }


  render() {
    const options = this.getOptions()
    return (
      <select name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
      >{options}</select>
    )
  }
}

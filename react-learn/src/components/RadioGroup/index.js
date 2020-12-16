import React, { Component } from 'react'


/**
 * 一组多选框
 */
export default class RadioGroup extends Component {

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e) 
  }

  /**
   * 得到一组单选框
   */
  getRadios() {
    return this.props.datas.map(item => (
      <label key={item.value}>
        <input type="radio" name={this.props.name} value={item.value} 
        checked={this.props.value === item.value}
        onChange={this.handleChange}
        />
        {item.text}
      </label>
    ))
  }

  render() {
    const rs = this.getRadios()
    return (
      <div>
        {rs}
      </div>
    )
  }
}

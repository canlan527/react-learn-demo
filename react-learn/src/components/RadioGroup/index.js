/*
 * @Author: your name
 * @Date: 2020-12-28 14:25:31
 * @LastEditTime: 2020-12-28 15:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn-demo\react-learn\src\components\RadioGroup\index.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../utils/CommonTypes'

/**
 * 一组多选框
 */
export default class RadioGroup extends Component {

  // 默认属性值
  static defaultProps = {
    datas: [],
    value: '',
  }
  // 添加约束
  static propTypes = {
    datas: types.groupDatas.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }
  
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

/*
 * @Author: your name
 * @Date: 2020-12-28 14:25:31
 * @LastEditTime: 2020-12-28 15:39:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn-demo\react-learn\src\components\SelectGroup\index.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import types from '../../../utils/CommonTypes'
/**
 * 一组下拉框
 */
export default class SelectGroup extends Component {
  //添加属性默认值
  static defaultProps = {
    datas: [],
    value: ''
  }
  //添加约束
  static propTypes = {
    datas: types.groupDatas.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange:PropTypes.func
  }
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

/*
 * @Author: your name
 * @Date: 2020-12-28 14:25:31
 * @LastEditTime: 2020-12-28 15:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editd
 * @FilePath: \react-learn-demo\react-learn\src\components\CheckboxGroups\index.js
 */
import React, { Component } from 'react'
import types from '../../utils/CommonTypes'
import PropTypes from 'prop-types'
/**
 * 一组多选框
 */
export default class CheckboxGroups extends Component {
  static defaultProps = { // 默认属性值
    datas: [],
    chooseDatas: []
  }
  // 属性约束
  static propTypes = {
    datas: types.groupDatas.isRequired,
    chooseDatas: types.chooseDatas,
    onChange:PropTypes.func,
    name: PropTypes.string.isRequired
  }
  handleChange = (e) => {
    let newArr = [];
    if(e.target.checked) {
       newArr = [...this.props.chooseDatas, e.target.value]
    } else {
      newArr = this.props.chooseDatas.filter(item => item !== e.target.value)
    }
    // 让调用者改变数组
    this.props.onChange && this.props.onChange(newArr, this.props.name, e) 
  }

  /**
   * 得到一组多选框
   */
  getCheckboxes() {
    return this.props.datas.map(item => (
      <label key={item.value}>
        <input type="checkbox" name={this.props.name} value={item.value} 
        checked={this.props.chooseDatas.includes(item.value)}
        onChange={this.handleChange}
        />
        {item.text}
      </label>
    ))
  }


  render() {
    const bs = this.getCheckboxes()
    return (
      <div>
        {bs}
      </div>
    )
  }
}

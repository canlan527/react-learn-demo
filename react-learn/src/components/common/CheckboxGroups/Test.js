/*
 * @Author: your name
 * @Date: 2020-12-28 14:25:31
 * @LastEditTime: 2020-12-28 15:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-learn-demo\react-learn\src\components\CheckboxGroups\Test.js
 */
import React, { Component } from 'react'
import CheckboxGroups from './index'
import {getAllStudents} from '../../../services/student'
export default class Test extends Component {
  state = {
    datas: [],
    chooseDatas:[],
  }
  async componentDidMount() {
      const stus = await getAllStudents();
      this.setState({
        datas: stus.map(item =>( {value: item.id.toString(), text:item.name}))
      })
  }
  
  render() {
    return (
      <div>
        <CheckboxGroups name="loves"  {...this.state} onChange={newArr => {
          this.setState({
            chooseDatas: newArr
          })
        }} />
      </div>
    )
  }
}

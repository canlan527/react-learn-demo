import React, { Component } from 'react'
import FuncProp from './FuncProp'
import ClassProp from './ClassProp'
export default class App extends Component {

  render() {
    return (
      <div>
        <FuncProp a={'number'} b={20}/>
        <ClassProp a='newPropValue' />
      </div>
    )
  }
}

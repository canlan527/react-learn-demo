import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './formContext'

export default class FormInput extends Component {

  static contextType = ctx;//静态属性

  static defualtProps = {
    type: 'text'
  }
  // 类型约束
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  }
  render() {
    return (
      <input value={this.context.formData[this.props.name] || ''} 
        onChange={(e) => {
            this.context.changeFormData(this.props.name, e.target.value)
          }}
        type={this.props.type}></input>
    )
  }
}

import React, { Component } from 'react'

export default class NewLifeCycle extends Component {

  state = {
    n: this.props.n
  }
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps','挂载前的一层拦截', props, state)
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

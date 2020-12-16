import React, { Component } from 'react'
// import NumberInput from './components/common/NumberInput'
// import Checkbox from './components/common/Checkbox'
// import Select from './components/common/Select'
import Form from './components/common/Form'
export default class App extends Component {

  // state = {
  //   val: ''
  // }
  // handleChange = (e) => {
  //   this.setState({
  //     val: e.target.value
  //   })
  // }
  // handleClick = (e) => {
  //   console.log(this.state.val)
  // }
  render() {
    return (
      <div>
        {/* <input type="text" value={this.state.val} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>获取input值</button> */}
        {/* <NumberInput /> */}
        {/* <Checkbox /> */}
        {/* <Select /> */}
        <Form />
      </div>
    )
  }
}

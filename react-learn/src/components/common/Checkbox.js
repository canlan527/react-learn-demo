import React, { Component } from 'react'

export default class Checkbox extends Component {
  state = {
    list: ['篮球','足球','羽毛球','桌球','其他'],
    chooseHobby:[]
  }

  render() {  
    const checkboxlist = this.state.list.map(item => <label key={item}>
       <input type="checkbox"
        checked={this.state.chooseHobby.includes(item)}
        onChange={e=>{
          if(e.target.checked) {
              this.setState({
                chooseHobby: [...this.state.chooseHobby, item]
              })
          } else {
            this.setState({
              chooseHobby: this.state.chooseHobby.filter(i => i !== item)
            })
          }
        }}
       />
      {item}
    </label>)
    return (
      <div>
        {checkboxlist}
        <button onClick={
          () => {
            console.log(this.state.chooseHobby)
          }
        }>获取选项</button>
      </div>
    )
  }
}

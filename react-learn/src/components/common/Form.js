import React, { Component } from 'react'

export default class Form extends Component {
  // 设置表单初试数据
  state = {
    loginId:'',
    loginPwd: '',
    sex: 'male',
    chooseLove: [],
    loves: [
      {value: 'football', text: '足球'},
      {value: 'basketball', text: '篮球'},
      {value: 'pingpong', text: '乒乓球'},
      {value: 'music', text: '音乐'},
      {value: 'travel', text: '旅游'},
      {value: 'movie', text: '电影'},
    ],
    city: 'beijing'
  }

  handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    // 对checkbox进行单独处理
    if(e.target.type === 'checkbox') {
      //对val进行特殊处理
      if(e.target.checked) {
        val =  [...this.state.chooseLove, val]
      } else {
        val = this.state.chooseLove.filter(it => it !== val)
      }
    }

    //使用字面量的方式
    this.setState({
      [name]: val
    })
    //通过新建对象的方式
    // const newPartialState = {}
    // newPartialState[name] = val;
    // this.setState(newPartialState)

    // low 的方式
    // if(name === 'loginId') {
    //   this.setState({
    //     loginId: val
    //   })
    // }
    
  }

  // 多选框操作
  getLovesCheckboxes() {
    const bs = this.state.loves.map(item => (
      <label key={item.value}>
        <input type="checkbox" name="chooseLove" 
          value={item.value}
          checked={this.state.chooseLove.includes(item.value)} 
          onChange={this.handleChange}
        />{item.text}
      </label>
    ));
    return bs; 
  }


  handleBtnClick = () => {
    console.log(this.state)
  }

  render() {
    const bs = this.getLovesCheckboxes()
    return (
      <div>
        <p>
          <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange} />
        </p>
        <p>
          <input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} />
        </p>
        <p>
          <select name="city" value={this.state.city} onChange={this.handleChange}>
              <option value="shanghai">上海</option>
              <option value="shenzhen">深圳</option>
              <option value="beijing">北京</option>
          </select>
        </p>
        <p>
          <label>
            <input type="radio" name="sex" value='male' checked={this.state.sex==="male"} onChange={this.handleChange} />男
          </label>
          <label>
            <input type="radio" name="sex" value='female' checked={this.state.sex==="female"} onChange={this.handleChange} />女
          </label>
        </p>
        <p>
          {/* 多选框 */}
          {bs} 
        </p>
        <p>
          <button onClick={this.handleBtnClick}>获取表单数据</button>
        </p>
      </div>
    )
  }
}

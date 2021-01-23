import React, { Component } from 'react'
import Banner from './index'

import newSrc1 from './img/1.jpg'
import newSrc2 from './img/2.jpg'
import newSrc3 from './img/3.jpg'
import newSrc4 from './img/4.jpeg'
import newSrc5 from './img/5.jpeg'

export default class Test extends Component {
  render() {
    const imgSrclist = [newSrc1,newSrc2,newSrc3,newSrc4,newSrc5]
   

    return (
      <div className="container">
        {/* <Banner imgSrc={pornSrc}></Banner> */}
        <br/>
        <Banner imgSrc={imgSrclist} duration={500}></Banner>

      </div>
    )
  }
}

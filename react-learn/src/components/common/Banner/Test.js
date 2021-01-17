import React, { Component } from 'react'
import Banner from './index'
import src1 from './img/pornbanner (1).png'
import src2 from './img/pornbanner (2).png'
import src3 from './img/pornbanner (3).png'
import src4 from './img/pornbanner (4).png'
import src5 from './img/pornbanner (5).png'
import src6 from './img/pornbanner (6).png'
import src7 from './img/pornbanner (7).png'
import src8 from './img/pornbanner (8).png'
import src9 from './img/pornbanner (9).png'
import src10 from './img/pornbanner (10).png'
import src11 from './img/pornbanner (11).png'
import src12 from './img/pornbanner (12).png'
import src13 from './img/pornbanner (13).png'
import src14 from './img/pornbanner (14).png'
import src15 from './img/pornbanner (15).png'
import src16 from './img/pornbanner (16).png'
import src17 from './img/pornbanner (17).png'
import src18 from './img/pornbanner (18).png'
import src19 from './img/pornbanner (19).png'
import src20 from './img/pornbanner (20).png'

import newSrc1 from './img/1.jpg'
import newSrc2 from './img/2.jpg'
import newSrc3 from './img/3.jpg'
import newSrc4 from './img/4.jpeg'
import newSrc5 from './img/5.jpeg'

export default class Test extends Component {
  render() {
    const imgSrclist = [newSrc1,newSrc2,newSrc3,newSrc4,newSrc5]
    const pornSrc = [src1, src2, src3, src4, src5, src6, src7, src8,src9,src10,
                        src11, src12, src13, src14, src15, src16, src17, src18,src19,src20
                        ]

    return (
      <div className="container">
        {/* <Banner imgSrc={pornSrc}></Banner> */}
        <br/>
        <Banner imgSrc={imgSrclist}></Banner>

      </div>
    )
  }
}

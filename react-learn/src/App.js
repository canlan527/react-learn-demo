import React from 'react'
import LayOut from './components/common/LayOut'

export default function App() {
  return (
    <div>
      <LayOut left={<div style={{border:'2px solid #444',height:"100%"}}>这是左边栏</div>}
        right={<div style={{border:'2px solid #ccc',height:"100%"}}>这是右边栏</div>}
      >
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptates tempora vitae magni non ea repellendus sunt quis officia, exercitationem iure aliquid aut, quo architecto, ex consectetur. Provident, minus mollitia?</h1>
      </LayOut>
    </div>
  )
}

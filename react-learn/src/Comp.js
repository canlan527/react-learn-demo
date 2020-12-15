import React from 'react'

export default function Comp(props) {
  console.log(props)
  return (
    <div>
     <h1> {props.html}</h1>
     {props.children}
    </div>
  )
}

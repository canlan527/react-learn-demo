import React from 'react'

export default function FuncProp(props) {
  return (
    <div>
      a: {props.a} b:{props.b} c:{props.c}
    </div>
  )
}

FuncProp.defaultProps = {
  a :' jxz ',
  b: 'flavor ',
  c: 'nice'
}
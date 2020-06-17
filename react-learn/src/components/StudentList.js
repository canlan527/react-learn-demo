import React from 'react'
import Student from './Student'
export default function StudentList(props) {
  const stus = props.stus.map(item => <Student {...item} key={item.id} />)
  return (
    <ul>
      {stus}
    </ul>
  )
}

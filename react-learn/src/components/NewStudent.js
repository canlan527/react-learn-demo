import React from 'react'

export default function NewStudent(props) {
  return (
    <li>
      【姓名】{props.name},
    【邮箱】{props.email},
    【性别】{props.sex === '0' ? '女' : '男'},
    【手机号码】{props.phone},
    【地址】{props.address},
    </li>
  )
}

import React from 'react'

export default function Student({name, sex,birth}) {
  return (
    <li>
      姓名：{name} &nbsp;
      性别：{sex === 1 ? '男' : '女'} &nbsp;
      出生年月：{birth} &nbsp;
    </li>
  )
}

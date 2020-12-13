import React from 'react'

export default function Student({name, sex, birth}) {
  return (
    <li>
        【姓名】:{name}
        【性别】:{sex === 0 ? '男': '女'}
        【出生年月】:{birth}
    </li>
  )
}

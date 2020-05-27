import React from 'react'


export default function Student(prop) {
  return  <p> 学生姓名：{prop.name} 
              学生性别：{prop.sex === 1 ? '男' : '女'} 
              学生邮箱：{prop.email} 
              学生地址：{prop.address} 
          </p>
}
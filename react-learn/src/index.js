import React from 'react'
import ReactDOM from 'react-dom';
import  FuncCmp  from './FuncCmp.js'
import {ClassCmp} from './ClassCmp'
import StudentList from './components/StudentList'
import NewStudentList from './components/NewStudentList'
const root = document.getElementById('root')
const baseUrl = 'http://api.duyiedu.com/'
const appKey = "demo13_1545210570249"

async function getStuList() {
  return await fetch(`${baseUrl}api/student/findAll?appkey=${appKey}`)
    .then(res => res.json())
    .then(res => res.data)
   
}

async function render() {
  ReactDOM.render('正在加载中...', root);
  const StuList = await getStuList()
  console.log(StuList)
  ReactDOM.render( <> 
    <FuncCmp number="2"></FuncCmp>
    <FuncCmp number={5}></FuncCmp>
    <FuncCmp number={6}></FuncCmp>
    <ClassCmp number="7"></ClassCmp>
    <ClassCmp number={8} enable></ClassCmp>
    <ClassCmp number={9} obj={{
      name:'jxz',
      age: 20
    }}></ClassCmp>
    <ClassCmp number="infinity" ui={<h2>这是classcmp的内容</h2>}></ClassCmp>
    {/* 渲染学生列表 */}
  {/* <StudentList stud={StuList}/> */}
  <NewStudentList stud={StuList}></NewStudentList>
  </>, root)
}
render()
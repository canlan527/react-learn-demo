import React from 'react';
import ReactDOM from 'react-dom';
// import  FuncCmp  from './funcCmp.js'
// import {ClassCmp} from './classCmp'
import StudentList from './components/StudentList'
const root = document.getElementById('root')
const baseUrl = 'http://api.duyiedu.com/'
const appKey = "demo13_1545210570249"

async function getStuList() {
  return await fetch(`${baseUrl}api/student/findAll?appkey=${appKey}`)
    .then(res => res.json())
    .then(res => res.data)
   
}

async function render() {
  const StuList = await getStuList()
  console.log(StuList)
  ReactDOM.render( <> <StudentList stud={StuList}/></>, root)
}
render()
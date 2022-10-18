import React, {useState, useEffect} from 'react'
import StudentList from '../StudentList'
import { getStudents } from '../../services/student'

export default function StudentContainer() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function (){
      const res = await getStudents(page, 10);
      setStudents(res.findByPage)
    })()
  }, [page])
  // 传入page 依赖项，page变化时，需要重新获取数据 -》有副作用，依赖page -》每次page变化，都会重新执行
  // 空数组的目的，是让该副作用函数没有任何依赖项，从而仅在首次挂载时运行

  return (
    <div>
      <StudentList stus={students}></StudentList>
      <input type="number"  value={page} onChange={e => {
        setPage(parseInt(e.target.value))
      }} />
    </div>
  )
}

const appkey = "demo13_1545210570249";
const domain = 'http://open.duyiedu.com'
/**
 * 获取所有学生
 */
export async function getAllStudents() {
  return await fetch(`${domain}/api/student/findAll?appkey=${appkey}`).then(resp => resp.json())
    .then(resp => resp.data)
}
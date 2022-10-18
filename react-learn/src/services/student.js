const appKey = "demo13_1545210570249"

export async function getAllStudents() {
  return await fetch(`/api/student/findAll?appkey=${appKey}`).then(res => res.json()).then(res => res.data)
}

export async function getStudents(page = 1, limit = 10) {
  return await fetch(`/api/student/findByPage?appkey=${appKey}&page=${page}&size=${limit}`).then(res => res.json()).then(res => res.data)
}
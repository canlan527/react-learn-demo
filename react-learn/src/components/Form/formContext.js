import React from 'react'

// export default  React.createContext() // 默认导出一个上下文

const ctx = React.createContext()

export const { Provider, Consumer } = ctx;

export default ctx;
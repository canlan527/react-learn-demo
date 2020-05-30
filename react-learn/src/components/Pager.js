import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性
 * 1.current:初始页码
 * 2.total:总数据量
 * 3.limit:页容量，每页显示的数据量
 * 4.panelNumber:数字页码最多显示多少个
 * 5.onPageChange:当页码改变的事件
 */

export default function Pager(props) {
  const pageNumber = getPageNumber(props)
  let min = getMinNumber(props)
  let max = getMaxNumber(min, pageNumber, props)
  let number = []
  for (let i = min; i <= max; i++) {
    number.push(<span className={i === props.current ? 'item active' : 'item'} key={i}
      onClick={() => { toPage(i, props) }}
    >{i}</span>)
  }
  return (
    <>
      <span className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={() => { toPage(1, props) }}
      >首页</span>
      <span className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}
      >上一页</span>
      {/* 数字页码 */}
      {number}
      <span className={props.current === pageNumber ? 'item disabled' : 'item'}
        onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }}
      >下一页</span>
      <span className={props.current === pageNumber ? 'item disabled' : 'item'}
        onClick={() => { toPage(pageNumber, props) }}
      >尾页</span>
      <span className="current">{props.current}</span> / <span>{pageNumber}</span>
    </>
  )
}

/**
 * 获取最小页码
 * @param {*} props 
 */
function getMinNumber(props) {
  let min = props.current - Math.floor(props.panelNumber / 2)
  if (min < 1) {
    min = 1
  }
  return min
}


function getMaxNumber(min, pageNumber, props) {
  let max = min + props.panelNumber - 1
  if (max > pageNumber) {
    max = pageNumber
  }
  return max
}



/**
 * 跳转到指定页码
 * @param {*} target 目标页码
 * @param {*} props  所有属性
 */
function toPage(target, props) {
  if (props.current !== target) {
    props.onPageChange && props.onPageChange(target)
  }
}

/**
 * 计算总页数
 * @param {} props 
 */
function getPageNumber(props) {
  return Math.ceil(props.total / props.limit)
}
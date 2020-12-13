// 制作分页组件
import React from 'react'
import './styles.css'
/**
 * 分页组件
 * 属性
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber: 数字页码最多显示多少个
 * 5. onPageChange: 页面改变事件
 */
export default function Pager(props) {
    let pageNumber = getPageNumber(props.total, props.limit)// 总页码
    let minNumber = getMinNumber(props.current, props.panelNumber) // 拿到最小数字
    let maxNumber = getMaxNumber(minNumber, pageNumber, props.panelNumber) // 拿到最大数字
    let numbers = []
    for(let i = minNumber; i < maxNumber + 1; i ++) {
      numbers.push(<span key={i} onClick={() => { toPage(i, props) }}  
        className={i === props.current ? 'item active' : 'item'}>{i}</span>)
    }
    return (
      <>
        <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
        <span onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}
          className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
        {/* 数字页码 */}
        {numbers}
        <span onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber :  props.current + 1, props) }}
          className={props.current === pageNumber ? 'item disabled' : 'item'}>下一页</span>
        <span onClick={() => { toPage(pageNumber, props) }}
          className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>
        
        <span className='marginLeft'>{props.current}</span>/<span>{pageNumber}</span>
      </>
    )
}

/**
 * 计算最小数字页码
 * @param {*} props 
 * @param {*} pageNumber 
 */
function getMinNumber(current, panelNumber) {
  let min =  current - Math.floor(panelNumber / 2)
  min = min < 1 ? 1 : min;
  return min;
}

function getMaxNumber(min, pageNumber, panelNumber) {
  let max = min + panelNumber - 1;
  max = max > pageNumber ? pageNumber : max;
  return max;
}


/**
 * 点击页码跳转事件
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target, props) {
  if(target === props.current) {
    return;
  }
  props.onChange && props.onChange(target);
}



/**
 * 
 * @param {Number} total 总页数
 * @param {Number} limit 每页的限制数
 */
function getPageNumber(total, limit) {
  return Math.ceil(total / limit);
}
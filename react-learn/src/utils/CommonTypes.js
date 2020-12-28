/*
 * @Author: your name
 * @Date: 2020-12-28 14:28:21
 * @LastEditTime: 2020-12-28 15:20:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editr
 * @FilePath: \react-learn-demo\react-learn\src\utils\CommonTypes.js
 */
import PropTypes from 'prop-types'
export default {
  children: PropTypes.node, //子元素必须是可以渲染的东西
  groupDatas:  PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),//多选框，单选框组，下拉列表的数据来源
  chooseDatas: PropTypes.arrayOf(PropTypes.string)
}
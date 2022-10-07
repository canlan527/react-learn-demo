import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export default function StudentList({page}) {
  return (
    <div>
      
    </div>
  )
}

StudentList.defaultProps = {
  page: 1,
}

StudentList.propTypes = {
  page: PropTypes.number.isRequired,
}
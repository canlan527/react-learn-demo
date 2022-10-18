import React, { useState } from 'react'
import StudentContainer from './components/StudentContainer';
export default function App() {
  console.log('app render');

  return (
    <div>
     <StudentContainer></StudentContainer>
    </div>
  )
}

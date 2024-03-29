import React from 'react'
import NewComponent3 from './NewComponent3'
import "../App.css";
function NewComponent2() {
  return (
    <div className='box2'>
       <h2>Child1</h2>
       <NewComponent3/>
    </div>
  )
}

export default NewComponent2

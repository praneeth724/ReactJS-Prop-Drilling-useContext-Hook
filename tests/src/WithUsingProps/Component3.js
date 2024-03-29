import React from 'react'
import Component4 from './Component4'
import "../App.css";
function Component3(props) {
  return (
    <div className='box3'>
      <h2>Child2</h2>
      
      <Component4 user={props.user}/>
    </div>
  )
}

export default Component3

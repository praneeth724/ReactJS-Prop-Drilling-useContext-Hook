import React from 'react'
import Component3 from './Component3'
import "../App.css";
function Component2(props) {
  return (
    <div className='box2'>
      <h2>Child1</h2>
      
      <Component3 user={props.user}/>
    </div>
  )
}

export default Component2

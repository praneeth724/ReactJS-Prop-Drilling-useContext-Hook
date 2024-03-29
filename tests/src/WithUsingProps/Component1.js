import React, { useState } from 'react'
import Component2 from './Component2'
import "../App.css";
function Component1() {
    const[username,setUserName]=useState("Guest")
  return (
    <div className='box1'>
      <h2>Parent</h2>
      <p>Welcome {username} </p>
      <input type='text' placeholder='Enter your username' onChange={(e)=>{
        setUserName(e.target.value)
      }}/>
      <Component2 user={username}/>
    </div>
  )
}

export default Component1

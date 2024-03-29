import React, { useContext } from 'react'
import { UserApp } from './NewComponent1'
import "../App.css";
function NewComponent4() {
    const user=useContext(UserApp)
  return (
    <div className='box4'>
       <h2>Child3</h2>
       <p>Welcome {user===""? "Guest" : user}</p>
    </div>
  )
}

export default NewComponent4

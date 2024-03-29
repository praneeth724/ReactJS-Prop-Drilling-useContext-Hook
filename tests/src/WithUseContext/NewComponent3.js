import React, { useContext } from 'react'
import NewComponent4 from './NewComponent4'
import "../App.css";
import { UserApp } from './NewComponent1';
function NewComponent3() {
  const user=useContext(UserApp)
  return (
    <div className='box3'>
       <h2>Child</h2>
       <p>Welcome {user===""? "Guest" : user}</p>
       <NewComponent4/>
    </div>
  )
}

export default NewComponent3

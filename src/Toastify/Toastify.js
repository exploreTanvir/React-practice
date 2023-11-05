import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const handleClick=()=>{
        toast("new user is added")
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1 className='component'>Toastify component</h1>
        <button onClick={handleClick}>Add new user</button>
        <ToastContainer/>
    </div>
  )
}

export default Toastify
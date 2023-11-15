import React, { useState } from 'react'
// memo function for stop child rendaring
const Memo = () => {
    const [count,setCount]=useState(0)
    const HandleClic=()=>{
        setCount((count)=>count+1)
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={HandleClic}>Increment</button>
    </div>
  )
}

export default Memo
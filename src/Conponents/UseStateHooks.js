import React, { useState } from 'react'

const UseStateHooks = () => {
    const [count,setCount]=useState(0)
   const HandleDecrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1 className='component'> Use State Hooks on functional component</h1>
        <h1>{count}</h1>
        <button onClick={HandleDecrement}>Decrement</button>
    </div>
  )
}

export default UseStateHooks
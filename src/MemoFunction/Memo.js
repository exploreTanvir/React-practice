import React, { useCallback, useMemo, useState } from 'react'
import Messege from './Messege'
// memo function for stop child rendaring
const Memo = () => {
    const [count,setCount]=useState(0)
    const [toggle,setToggle]=useState(false)
    const HandleClic=()=>{
        setCount((count)=>count+1)
    }

    const HandleIncrement=useCallback(
      ()=>{
        setCount(count+1)
      },[count]
    )

    const newNumber=useMemo(() => {
      let number=0
      for (let index = 0; index < 5000000000; index++) {
        number++ 
      }
      return number
    }, [])
   
  return (
    <div>
      <h1>Number: {newNumber}</h1>
      {toggle?"on":"off"}
      <button onClick={()=>{
        setToggle(!toggle)
      }}>Toggle</button>
        <h1>Count : {count}</h1>
        <button onClick={HandleClic}>Increment</button>
        <Messege CountMessege={count} onHandleIncrement={HandleIncrement}/>
    </div>
  )
}

export default Memo
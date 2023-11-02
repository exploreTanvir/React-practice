import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [isLoading,setLoading]=useState(false)
    const handleClicked=()=>{
        setCount(count+1)
    }
    const loadingHandle=()=>{
        setLoading(!isLoading) 
    }
    useEffect(()=>{
        console.log("UseEffect")
    },[count])
  return (
    <div>
        {console.log("rendering")}
         <h1 className='component'>Use Effect component</h1>
         <h1 onClick={handleClicked}>Count : {count}</h1>
         <div style={{textAlign:"center"}}><button onClick={handleClicked}>+</button></div>
         <div style={{textAlign:"center"}}><button onClick={loadingHandle}>isLoading</button></div>
        
    </div>
  )
}

export default UseEffect
import React, { useEffect, useState } from 'react';
import "./Dynamic.module.css";

const DynamicStyle = () => {
    const error=true;
    const [name,setName]=useState("")
    const [isValid,setIsValid]=useState(false)
     
    useEffect(() => {
        if(name.length<3){
            setIsValid(false)
        }
        else{
            setIsValid(true)
        } 
    }, [name])
    const handleChange=(e)=>{
        setName(e.target.value)
    }
   
  return (
    <div>
        <h1 className='component'>Dynamic Styling component</h1>
    <h1  style={{
            color:error?"red":"blue",
            background:error?"yellow":"white"
    }}>For test purpus</h1>
    <input 
    type='text'
    value={name}
    onChange={handleChange}
    style={{background:isValid?"green":"red",
    color:"white"
    }} 
    className={`${isValid?"valid":"invalid"}`} 
    />
    <p style={{textAlign:'center'}}>{name}</p>
    </div>
  )
}

export default DynamicStyle
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const User = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const {userID}=useParams()

    const [name,setName]=useState("")
    const HandleChange=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSearchParams({name:name})
    }
  return (
    <div>
        <h1>{userID}</h1> 
        <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1>
      <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={HandleChange}/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default User
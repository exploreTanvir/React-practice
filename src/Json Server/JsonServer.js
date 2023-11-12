import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const JsonServer = () => {
    const [users,setUsers]=useState([])
    const getAllUsers=async()=>{
        const response=await Axios.get("http://localhost:3001/user")
        setUsers(response.data)

    }

    useEffect(() => {
      getAllUsers()
    }, [])
    
  return (
    <div>
        {users.map((user)=>{
            return <article>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.id}</h2>
            </article>
        })}
    </div>
  )
}

export default JsonServer
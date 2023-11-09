import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogsData } from "./Data.js"


const Blog = () => {
    const {title}=useParams()
    const [bodyData,setBodyData]=useState("")


useEffect(() => {
  const blogData=blogsData.filter((blog)=>blog.title==title)
    setBodyData(blogData[0].body)
}, [])

    
  return (
    <div>
        <h1>{title} Page </h1>
         <p>{bodyData}</p>
    </div>
   
  )
}

export default Blog
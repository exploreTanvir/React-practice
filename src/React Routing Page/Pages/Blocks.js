import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { blogsData } from "./Data.js"

const SliceText=(str,num)=>{
  if(str.length>num){
    return str.slice(0,num)+"..."
  }
  else{
    return str
  }
}

const Blocks = () => {
  const [blogs,setBlogs]=useState(blogsData)
  return (
    <div>
        <h1>This is Blocks Page</h1>
        <section>
          {blogs.map((blog)=>{
            const {id,title,body}=blog
            return <article>
              <h2>{title}</h2>
              <p>{SliceText(body,100)}</p>
              <Link to={title}>Learn More</Link>
            </article>
          })}
        </section>
    </div>
  )
}

export default Blocks
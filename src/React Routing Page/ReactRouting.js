import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blocks from "./Pages/Blocks"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Error from './Pages/Error'
import Home from "./Pages/Home"
import User from "./Pages/User"


const ReactRouting = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blocks/>}/>
        <Route path="/blogs/:title" element={<Blog/>}/>
        <Route path="/*" element={<Error/>}/>
        {/* <Route path="/User/:userID" element={<User/>}/> */}
        <Route path="/User" element={<User/>}/>
        
          

        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default ReactRouting
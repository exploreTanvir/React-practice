import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blocks from "./Pages/Blocks"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Error from './Pages/Error';


const ReactRouting = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blocks" element={<Blocks/>}/>
        <Route path="/*" element={<Error/>}/>
        
          

        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default ReactRouting
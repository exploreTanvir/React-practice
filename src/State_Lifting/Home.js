import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

 
const Items=["Item1","Item2","Item3"]
const Home = () => {
   const [todos,setTodos]=useState(Items)
    const AddTodo=(newTodo)=>{
        setTodos([...todos+newTodo])
        console.log([...todos,newTodo])
    } 
  return (
    <div> 
        <NewTodo onTodo={AddTodo}/> 
        <Todos todos={Items}/>
    </div>
  )
}

export default Home
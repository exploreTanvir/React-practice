import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [todos,setTodos]=useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{ 
            return res.json()
        })
        .then((data)=>{
            setTodos(data)
            console.log(todos)
        })
    },[])
  return (
    <div>
        <h1>Todos</h1>
       
            {todos && todos.map((todo)=>{
               return console.log(todo.title)
              
            })}
            

    </div>
  )
}

export default DataFetch
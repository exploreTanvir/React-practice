import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const loadingMessege=<p>Todo is loading</p>
    const solveMessege=<p>Todo is already loaded please check console</p>
    const ErrorMessege=<p>there is somthing wrong</p>
    const noErrorMessege=<p>there is no wrong in this todo file</p>

    const [todos,setTodos]=useState(null)
    const [loadingTodo,setloadingTodo]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{ 
            if(!res.ok){
                throw Error("data fatching is not successful")
            }
            return res.json()
        })
        .then((data)=>{
            setTodos(data)
            setloadingTodo(false)
            
        })
        .catch(
            (error)=>{
            setError(error.messege)
            }
        )
    }, 3000);
    },[])
  return (
    <div>
        <h1>Todos</h1>
       
            {todos && todos.map((todo)=>{
               return console.log(todo.title)
              
            })}
            {loadingTodo ? loadingMessege:solveMessege}
            {error?ErrorMessege:noErrorMessege}
            

    </div>
  )
}

export default DataFetch
import React, { useState } from 'react';

const NewTodo = (props) => {
    const [todo,setTodo]=useState("")
    const handleTodo=(e)=>{
        setTodo(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onTodo(todo)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Add New Todo : </label>
            <input type='text'name="todo" id="todo" value={todo} onChange={handleTodo}/>
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodo
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos= [
    {
        "id":uuidv4(),
      "Name": "Tanvir",
      "description": "This is Desc 1"
    },
    {
        "id":uuidv4(),
      "Name": "Raju",
      "description": "This is Desc 2"
    },
    {
        "id":uuidv4(),
      "Name": "Rohim",
      "description": "This is Desc 3"
    },
    {
        "id":uuidv4(),
      "Name": "Korim",
      "description": "This is Desc 4"
    }
  ]


const UniqueList = () => {
    console.log(uuidv4());
  return (
    <div>
        {todos.map(
            (todo)=>{
                return (
                    <div key={todo.id}>
                        <h3>{todo.Name}</h3>
                        <h3>{todo.description}</h3>
                    </div>
                )
            }
        )}
    </div>
  )
}

export default UniqueList
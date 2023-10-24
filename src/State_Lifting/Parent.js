import React from 'react'
import Child from './Child'

const Parant = () => {
    const parantdata="Hello i am from parent (App)"
    const reciveData=(data)=>{
        console.log(data)
    }
  return (
    <div>
          <Child parantdata={parantdata} reciveData={reciveData}/>
    </div>
  )
}

export default Parant
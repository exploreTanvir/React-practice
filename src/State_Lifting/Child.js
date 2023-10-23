import React from 'react'

const Child = (props) => {
    const childData="Hello iam child from (Child.js)"
    props.reciveData(childData)
  return (
    <div>
      
        <h1 className='component'>State Listing component</h1> 
        
        <h1>{props.parantdata}</h1>
    </div>
  )
}

export default Child
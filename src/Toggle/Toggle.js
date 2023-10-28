import React, { useState } from 'react';

const Toggle = () => {
    const [toggle,setToggle]=useState(true)
    const ShowHandle=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
        <h1 className='component'>Toggle component</h1>
        <div className='toggle'>
        
        {toggle && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt blanditiis numquam, consequuntur dignissimos dicta ex facilis qui nobis explicabo officiis, accusamus ratione rem natus minima unde quia eveniet fugit vitae totam cumque pariatur veniam aliquam quaerat! Tempore voluptatum fuga sunt accusamus eaque molestiae veritatis vero quae ab expedita. Veniam.</p>}
        <div style={{textAlign:"center"}}>
            <button onClick={ShowHandle}>{toggle?"Hide":"Show"}</button>
            
        </div>
    </div>
    </div>
  )
}

export default Toggle
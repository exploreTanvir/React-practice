import React, { useState } from 'react'
import style from "./form.module.css"

const Form = () => {
    //Set State 
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    //event handle
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const submitChange=(e)=>{
        console.log("form was submitted")
        let userInfo={
            name,
            email, 
            password
        }
        console.log(userInfo)
        e.preventDefault()
    }
  return (
    <div>
         <h1 className='component'>Form component</h1>
        <h1>Registration</h1>
        <form onSubmit={submitChange}>
            <div className={style.formGrp} onChange={nameChange}>
            <label htmlFor='name'>Name : </label>
            <input
             type='text' 
             name="name" 
             id="name" 
             value={name}
             required/>
            </div>
            <div className={style.formGrp} onChange={emailChange}>
            <label htmlFor='email'>Email :  </label>
            <input
             type='email'
              name="email"
               id="email" 
               value={email}
               required />
            </div>
            <div className={style.formGrp} onChange={passwordChange}>
            <label htmlFor='password'>Password :  </label>
            <input
             type='password' 
             name="password"
              id="password"
              value={password}
               required/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form
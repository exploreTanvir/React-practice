<<<<<<< HEAD
import React, { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import style from "./faq.module.css";


const FAQ = ({id,title,desc}) => {
  const [toggle,setToggle]=useState(false)
  const ShowHandle=()=>{
    setToggle(!toggle)
  }
  return (
   <div className={style.faq}>
     <section >
        <h3>{title}</h3>
        <button onClick={ShowHandle} className={style.btn}>{toggle ? <GiHeartMinus/>:<GiHeartPlus/>}</button>
    </section>
    {toggle && <p>{desc}</p>}
   </div>
  )
}

=======
import React, { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import style from "./faq.module.css";


const FAQ = ({id,title,desc}) => {
  const [toggle,setToggle]=useState(false)
  const ShowHandle=()=>{
    setToggle(!toggle)
  }
  return (
   <div className={style.faq}>
     <section >
        <h3>{title}</h3>
        <button onClick={ShowHandle} className={style.btn}>{toggle ? <GiHeartMinus/>:<GiHeartPlus/>}</button>
    </section>
    {toggle && <p>{desc}</p>}
   </div>
  )
}

>>>>>>> 053a83c (FAQ(Frequently Asked Questions))
export default FAQ
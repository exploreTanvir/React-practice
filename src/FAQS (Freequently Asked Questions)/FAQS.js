import React, { useState } from 'react'
import { faqsData } from './Data'
import FAQ from './FAQ'
import style from "./faq.module.css"

const FAQS = () => {
  const [faqs,setFaqs]=useState(faqsData) 
  return (
    <div>
       <h1 className='component'>FAQS component</h1>
      <div className={style.container}>
      <section className={style.faqs}>
        <h1>FAQS</h1>
        {faqs.map((faq)=>(<FAQ key={faq.id} {...faq}/>))}
      </section>
    </div>
    </div>
  )
}

export default FAQS
import React from 'react';
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Icons() {
  return (
    <div>
      <h1>Hello this is Icon component</h1>
      <span>
        <FaFacebook className='icon'/>
        <FaGithub  className='icon'/>
    </span>
    </div>
  )
}

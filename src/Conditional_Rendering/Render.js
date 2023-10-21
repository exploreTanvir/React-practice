import React, { Component } from 'react'
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

export default class Render extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    const {isLoggedIn}=this.state
    let content=isLoggedIn?<HomePage/>:<LoginPage/>

    return(
        <div>
          <h1 className='component'>Conditional Rendering component</h1>
            {content}
        </div>
    )
  }
}

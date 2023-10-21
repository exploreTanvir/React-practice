import React, { Component } from 'react';

export default class EventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue:""
      }
    }
    
    handleOnChange=(e)=>{
        this.setState(
            {
                changedValue:e.target.value
            }
          )

    }

  render() {
    return (
      <div>
        <h1 className='component'>Event Handler component</h1>
        <input type='text' onChange={this.handleOnChange}/>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}

// Bind Function only for normal function not for es6 arrow function
// arrow function use korle bind function lage na


import React, { Component } from 'react';

export default class BindEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    
  render() {
    const {count}=this.state
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.increment.bind(this)}> increase </button>
      </div>
    )
  }
}

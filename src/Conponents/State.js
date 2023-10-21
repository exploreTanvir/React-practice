import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { GiHeartMinus, GiHeartPlus, GiVortex } from 'react-icons/gi';

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         messege:"Click a button"
      }
    }

    increment=()=>{
        this.setState(
            {
                count:this.state.count + 1,
                messege: "Increment"
            }
        )
    }

    decrement=()=>{
        this.setState(
            {
                count:this.state.count - 1,
                messege: "Decrement"
            }
        )
    }
    
  render() {
    const {count,messege}=this.state
    return (
      <div> 
        <h1 className='component'>State component</h1>
        <h1>Count : {count}</h1>
        <Button onClick={this.increment} disabled={count===5?true:false}> <GiHeartPlus className='icon'/> </Button>
        <Button onClick={this.decrement} disabled={count===0?true:false}> <GiHeartMinus  className='icon'/> </Button>
        <h1><GiVortex  className='icon'/>{messege}</h1>
        </div>
    )
  }
}

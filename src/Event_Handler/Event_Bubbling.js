// https://www.youtube.com/watch?v=4AfRswo9RmY&list=PLgH5QX0i9K3rGtitufynBKMy5gAFpa1y8&index=29
import React from 'react'

const EventBubbling = () => {
    const ParantEvent=(event)=>{
        console.log("Parant event ",event)
    }
    const ChildEvent=(event)=>{
        event.stopPropagation()
        console.log("Child event ",event)
    }
  return (
    <div onClick={ParantEvent}>
        <h1 className='component'> Event Bubbling component</h1>
        <button onClick={ChildEvent}>Click Here</button>
    </div>
  )
}

export default EventBubbling
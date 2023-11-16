// memo function for stop child rendaring

import { memo } from "react"

const Messege =({CountMessege,onHandleIncrement}) => {         
        console.log("Messege Rendaring")
      return (
        <div>
          <p>Send {CountMessege} messege</p>
          <button onClick={onHandleIncrement}>increment</button>
        </div>
      )
    }

export default memo(Messege)
// memo function for stop child rendaring

import { memo } from "react"

const Messege =() => {         
        console.log("Messege Rendaring")
      return (
        <div>Messege</div>
      )
    }

export default memo(Messege)
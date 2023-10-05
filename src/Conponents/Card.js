//Functional component
// Use of jsx 
// apply html js and css code using jsx

const todoTitle="Style using jsx css"
const todoDesc="Hello this is Description"
const currentYear=new Date().getFullYear()
const currentDate=new Date().getDate()
const currentMonth=new Date().getMonth()

function Card(){
    return<div className="main">

<div className='card'>
     <p className='cardTitle'>{todoTitle}</p>
     <p className='cardDesc'>{todoDesc}</p>
     <p className='cardDate'>{currentMonth+"/"+currentDate+"/"+currentYear}</p>

    
    
     </div>
     <p className='DateCss'>{"Month :"+currentMonth}</p>
     <p>{"Date :"+currentDate}</p>
    </div>
 }

export default Card
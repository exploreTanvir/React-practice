//Functional component
// Use of jsx 
// apply html js and css code using jsx
// const todoTitle="Style using jsx css"
// const todoDesc="Hello this is Description"
const currentYear=new Date().getFullYear()
const currentDate=new Date().getDate()
const currentMonth=new Date().getMonth()

function Card(props){

    // Props and destructuring
    const {todoTitle,todoDesc}=props


    return<div className="main">
<div className='card'>
     <p className='cardTitle'>{todoTitle}</p> {/*Using distruction*/}
     <p className='cardDesc'>{todoDesc}</p>Using distruction
     <p className='cardDate'>{currentMonth+ "/"+currentDate+"/"+currentYear}</p>
     </div>
    </div>
 }



export default Card

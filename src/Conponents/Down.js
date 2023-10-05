const currentDate=new Date().getDate()
const currentMonth=new Date().getMonth()

function Down(){
   return <div>
        <p className='DateCss'>{"Month :"+currentMonth}</p>
     <p>{"Date :"+currentDate}</p>
    </div>
 }
 export default Down 
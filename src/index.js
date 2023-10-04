import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));


// Use of jsx 
// apply html js and css code using jsx

const todoTitle="Style using jsx css"
const todoDesc="Hello this is Description"
const currentYear=new Date().getFullYear()
const currentDate=new Date().getDate()
const currentMonth=new Date().getMonth()
const currentTime=new Date().getTime()

// inline css
const firstCss={color:"red",
                fontSize:"3rem",
                backgroundColor:"purple",
                textAlign:"center",
                padding:"15px"
            }
// external css from public folder style.css file


root.render(
<div>
<div className='card'>
<p className='cardTitle'>{todoTitle}</p>
<p className='cardDesc'>{todoDesc}</p>
<p className='cardDate'>{currentMonth+"/"+currentDate+"/"+currentYear}</p>
</div>

<p style={firstCss}>{"Year :"+currentYear}</p>
<p className='DateCss'>{"Month :"+currentMonth}</p>
<p>{"Date :"+currentDate}</p>
<p>{"Time :"+currentTime}</p>

</div>
);


import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));


// Use of jsx 
// apply html js and css code using jsx

const todoTitle="Hello this is Title"
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
<p style={firstCss}>{todoTitle}</p>
<p className='DateCss'>{todoDesc}</p>
<p>{"Year :"+currentYear}</p>
<p>{"Month :"+currentMonth}</p>
<p>{"Date :"+currentDate}</p>
<p>{"Time :"+currentTime}</p>
<p>{currentMonth+"/"+currentDate+"/"+currentYear}</p>
</div>
);


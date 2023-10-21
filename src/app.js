import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Icons from "./Conponents/Icons";
// import React_Bootstrap from "./Conponents/React_BootStrapp";
import BindEvent from './Binding Event Handler/BindEvent';
import Render from './Conditional_Rendering/Render';
import State from './Conponents/State';
import UseStateHooks from './Conponents/UseStateHooks';
import EventHandler from './Event_Handler/EventHandler';

function App(){
    // let items=[]
    // items=Data.map((item)=><Card todoTitle={item.Title} todoDesc={item.desc}/>)

    return <div>

    <Icons/>
    {/* <React_Bootstrap/> */}
   <State count="0"/>
   <Render/>
   <EventHandler/>
   <BindEvent/>
   <UseStateHooks/>


    </div>
}



export default App
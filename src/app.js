import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Icons from "./Conponents/Icons";
// import React_Bootstrap from "./Conponents/React_BootStrapp";
import BindEvent from './Binding Event Handler/BindEvent';
import Render from './Conditional_Rendering/Render';
import State from './Conponents/State';
import UseStateHooks from './Conponents/UseStateHooks';
import EventHandler from './Event_Handler/EventHandler';
import EventBubbling from './Event_Handler/Event_Bubbling';
import Form from './Form/Form';
import Home from './State_Lifting/Home';
import Parant from './State_Lifting/Parent';


function App(){
    // let items=[]
    // items=Data.map((item)=><Card todoTitle={item.Title} todoDesc={item.desc}/>)

    return <div>

    <Icons/>
   <State count="0"/>
   <Render/>
   <EventHandler/>
   <BindEvent/>
   <UseStateHooks/>
   <EventBubbling/>
   <Form/>
   <Parant/>
   <Home/>


    </div>
}



export default App
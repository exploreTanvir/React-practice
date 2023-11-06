import 'bootstrap/dist/css/bootstrap.min.css';
import './Form Validation/App.css';

import React from "react";
import Icons from "./Conponents/Icons";
// import React_Bootstrap from "./Conponents/React_BootStrapp";
import BindEvent from './Binding Event Handler/BindEvent';
import Render from './Conditional_Rendering/Render';
import State from './Conponents/State';
import UseStateHooks from './Conponents/UseStateHooks';
import DataFetch from './Custom Hooks/DataFetch';
import DynamicStyle from './Dynamic Style/DynamicStyle';
import EventHandler from './Event_Handler/EventHandler';
import EventBubbling from './Event_Handler/Event_Bubbling';
import FAQS from './FAQS (Freequently Asked Questions)/FAQS';
import FormValidation from './Form Validation/FormValidation';
import Form from './Form/Form';
import Home from './State_Lifting/Home';
import Parant from './State_Lifting/Parent';
import Toastify from './Toastify/Toastify';
import Toggle from './Toggle/Toggle';
import DataFetc from './Use Effect/DataFetch';
import UseEffect from './Use Effect/UseEffect';


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
   <FormValidation/>
   <Toggle/>
   <FAQS/>
   <UseEffect/>
   <DataFetc/>
   <DataFetch/>
   <Toastify/>
   <DynamicStyle/>


    </div>
}



export default App
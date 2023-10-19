import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Icons from "./Conponents/Icons";
import React_Bootstrap from "./Conponents/React_BootStrapp";
import State from './Conponents/State';

function App(){
    // let items=[]
    // items=Data.map((item)=><Card todoTitle={item.Title} todoDesc={item.desc}/>)

    return <div>

    <Icons/>
    <React_Bootstrap/>
   <State count="0"/>


    </div>
}



export default App
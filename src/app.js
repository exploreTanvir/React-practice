import React from "react";
import Card from "./Conponents/Card";
import Data from "./Data.json";

function App(){
    let items=[]
    items=Data.map((item)=><Card todoTitle={item.Title} todoDesc={item.desc}/>)

    return <div>
        <h1 className="headingCss">Todo App</h1>
        {items}



    </div>
}



export default App
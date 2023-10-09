import React from "react";
import Card from "./Conponents/Card";
import Down from './Conponents/Down';
import UniqueList from "./Conponents/UniqueList";
function App(){
    return <div>
        <h1 className="headingCss">Todo App</h1>
        {/* use of props for Card.js file */}
        <Card todoTitle="Hello Title1" todoDesc="Hello this is description1"/>
         <Down/> {/*from Down.js file */}
        <Card todoTitle="Hello Title2" todoDesc="Hello this is description2"/>
        <Card todoTitle="Hello Title3" todoDesc="Hello this is description3"/>


 {/* data mapping */}
        <UniqueList/>
    </div>
}



export default App
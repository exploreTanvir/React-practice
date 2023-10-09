import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./app";
import NastedList from './Conponents/NastedList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
      <App/>
      <NastedList/>
   
   </div>
);


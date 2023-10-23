import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";
import Parent from './Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
      <App/> 
      <Parent/>
   </div>
);


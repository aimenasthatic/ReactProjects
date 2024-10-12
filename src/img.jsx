import React from 'react';
import './App.css';
import logo from "./logo.png" // Tell webpack this JS file uses this image

const fname = "Aimen";
 function Imgs(){
    return(
        <>
      <h1 className='h1' contentEditable="true">my name is {fname}</h1>
 <div className='imgs'>
<img src={logo} alt="Logo" />
<img src={logo} alt="Logo" />
<img src={logo} alt="Logo" />
</div> 
</>
);
 }

 export default Imgs;
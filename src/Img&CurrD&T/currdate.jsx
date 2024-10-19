import React from 'react';

import './App.css';

const firstname = "Aimen";
const lname = "Iqbal";
const currDate = new Date(). toLocaleDateString();
const currTime = new Date(). toLocaleTimeString();

function  Name ()
{
    return(
 <div className='curr-div '>
     <h1 className='curr-h1'>My  name is {`${firstname} ${lname}`}</h1>
     <p className='curr-date'>Current Date  is = { currDate}</p>
     <p className='curr-time'>Current Time  is = { currTime}</p>  
   </div> 
    );
}
export default Name;
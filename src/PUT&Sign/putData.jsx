// import React from 'react';
// import './timer.css';
import { getDatabase , ref, set } from "firebase/database";
import {app} from "../firebase";

const db = getDatabase(app);

// import  Timer from "./timer"
// import './App.css';
// import  Hey from "./greeting";
// import Imgs from './img';
// import Name from "./currdate";
function App(){
  const putData = () => {
    set(ref(db, "user/aimen"), {
      id: 1,
      Name: "aimen",
      age: 21,
    });
  };
  return (
<>
{/* <Hey/>
<Name/>
<Imgs/> */}
{/* <Timer/> */}
<div className='app'>
  <h1>Firebase react app</h1>
  <button onClick={putData}>Put Data</button>
</div>
</>
  );
}
 
export default App;

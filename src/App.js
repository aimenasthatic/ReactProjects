import React from 'react';
import {app} from './firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider  } from 'firebase/auth';
import Contect from "./Contect";
import About from "./About";
 import "./App.css";
 import Test from './Test';
const auth = getAuth(app);

function App(){
  const signupUser = () => {
createUserWithEmailAndPassword (
  auth,
   "aimenbal809@gmail.com",
   "aimen230@").then((value) => console.log(value));
  };
  
  return (
<>
<Home/>
<Contect/>
</>
  );
};
 
export const googleAuth = new GoogleAuthProvider();
export default App;
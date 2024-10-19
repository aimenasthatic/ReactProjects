import React,{useState} from "react";
import {getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
 import {app} from "../firebase";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    // Call the Firebase function without reassigning it
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // User created successfully
        alert("Success");
      })
  };
  return(
    <div className="signup-page">
    <div className="input-field">
 <label>Email</label><br></br>
 <input onChange={(e)=>setEmail(e.target.value)} 
 value={email}
 type="email" 
 required placeholder="enter your email here"
 /><br></br>
 <label>Password</label><br></br>
 <input onChange={(e)=>setPassword(e.target.value)} 
 value={password}
 type="password" 
 required placeholder="enter your password here"
 /><br></br>
 </div>
 <button onClick={createUser}>
  signUp
 </button>
    </div>
  )
}

export default SignupPage;
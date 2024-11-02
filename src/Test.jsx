import React from "react";
import {auth, provider} from "./firebase";
import { signInWithPopup,signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

function Test(){

  const [user,loading, error] = useAuthState(auth)
  async function handleLogIn(){
    await signInWithPopup(auth, provider)
  } async function handleLogOut() {
     await signOut(auth)
  }
return(
    <>
    <div className="login">
    <h3>Login with google</h3>
    <label>Email</label><br>
    </br>
    <input type="email" required placeholder="enter your email here"></input>
    <br></br>
    <label>Password</label><br></br>
    <input type="Password" required placeholder="enter your email here"></input><br></br>
    <button onClick={handleLogIn}>Login with google</button>npm start
    <button onClick={handleLogOut}>Logout with google</button>
    {loading && <p>loading.....</p>}
    {user && (<>
    <h2>{user?.displayName}</h2>
    </>)  }
    </div>
    </> 
)
}

// export default  loginWIthgoogle;
export default Test;
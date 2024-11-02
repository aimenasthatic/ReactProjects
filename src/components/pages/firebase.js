// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getfirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDAGH_hGYKMrHuII10MnnuyoG2SwfjeuHY",
//   authDomain: "my-class-project-d5232.firebaseapp.com",
//   projectId: "my-class-project-d5232",
//   storageBucket: "my-class-project-d5232.appspot.com",
//   messagingSenderId: "644733447309",
//   appId: "1:644733447309:web:a3d2f5cca8e63b0bca86c4",
//   measurementId: "G-012EYJ206R",
//   databaseURL:"https://my-class-project-d5232-default-rtdb.firebaseio.com",
// };

// // Initialize Firebase
//  export const app = initializeApp(firebaseConfig);
// // const analytics = getfirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getfirestore(app);

 
//extra
// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAGH_hGYKMrHuII10MnnuyoG2SwfjeuHY",
  authDomain: "my-class-project-d5232.firebaseapp.com",
  projectId: "my-class-project-d5232",
  storageBucket: "my-class-project-d5232.appspot.com",
  messagingSenderId: "644733447309",
  appId: "1:644733447309:web:a3d2f5cca8e63b0bca86c4",
  measurementId: "G-012EYJ206R",
  databaseURL: "https://my-class-project-d5232-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export the initialized instances
export { app, auth, provider, db };

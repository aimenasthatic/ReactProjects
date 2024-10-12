// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAGH_hGYKMrHuII10MnnuyoG2SwfjeuHY",
  authDomain: "my-class-project-d5232.firebaseapp.com",
  projectId: "my-class-project-d5232",
  storageBucket: "my-class-project-d5232.appspot.com",
  messagingSenderId: "644733447309",
  appId: "1:644733447309:web:a3d2f5cca8e63b0bca86c4",
  measurementId: "G-012EYJ206R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getfirestore(app);
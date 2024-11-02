// import React from 'react';
// import {app} from './firebase';
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider  } from 'firebase/auth';
// import About from "./About";
//  import "./App.css";
//  import 'bootstrap/dist/css/bootstrap.min.css';

//  import Test from './Test';
// const auth = getAuth(app);
// function App(){
//   const signupUser = () => {
// createUserWithEmailAndPassword (
//   auth,
//    "itszamil123@gmail.com",
//    "zamiln230@").then((value) => console.log(value));
//   };

//   return (
// <>
// </>
//   );
// };

// export const googleAuth = new GoogleAuthProvider();
// export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/pages/SignUP';
import DoctorForm from './components/pages/doctorForm';
// import PatientForm from './components/pages/patient';
import Image from './components/pages/home';
import PatientForm from './components/pages/patientForm';
import "./App.css";
import Patients from './components/pages/patient';
import Footer from './components/inc/footer';
import AppointmentForm from './components/pages/Appointment';
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/doctorForm' element={<DoctorForm/>}/>
        <Route path='/patientForm' element={<PatientForm/>}/>
        <Route path='/Image' element={<Image/>}/>
        <Route path='/patients' element={<Patients/>}/>
        <Route path='/AppointmentForm' element={<AppointmentForm/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </Router>
  );
}
export default App;

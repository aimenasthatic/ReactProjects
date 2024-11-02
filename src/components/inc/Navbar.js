import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-light ">
        <a class="navbar-brand" href="#">Amplify Health</a>
        <li class="nav-item">
          <Link to="/" class="navbar-brand">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="navbar-brand">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="navbar-brand">Contact us</Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" class="navbar-brand">Sign Up</Link>
        </li>
      </nav>
    </>
  );
}

export default Navbar;
import { Link } from "react-router-dom";
import React from "react";
import Imagen from "../img/logo.png";
import { useState } from "react";


import Register from "./Register";

function Navbar() {
  


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{fontFamily:"Satisfy, cursive", fontSize:"25px" }}>
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/#" style={{color:"#4361ee", fontSize:"35px"}}>
          <img className="img-top ms-3 me-1" src={Imagen} alt="..." />
          My Itinerary
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse ms-4 " id="navbarNav" >
          <div className="navegacion offset-8">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" style={{color:"#4361ee"}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" style={{color:"#4361ee"}} aria-current="page" to="/cities">
                  Cities
                </Link>
              </li>
            </ul>
            </div>
            <Register />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

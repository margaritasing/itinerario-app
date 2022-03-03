import { Link } from "react-router-dom";
import React from "react";
import Imagen from "../img/logo.png";

import Register from "./Register";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor:"#d0d8ff"}}>
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="/#" style={{color:"#000"}}>
          <img className="img-top ms-4 me-4" src={Imagen} alt="..." />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4 " id="navbarNav">
          <div className="navegacion">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" style={{color:"#000"}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" style={{color:"#000"}} aria-current="page" to="/cities">
                  Cities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Register />
      </div>
    </nav>
  );
}

export default Navbar;

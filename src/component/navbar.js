import React from 'react'
import logo from './images/NAC_Navbar.png';
import {Link} from "react-router-dom"
export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed",zIndex:"1111111", width:"100%"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
      <img style={{width: "500px",heigth:"100px",marginLeft:"50px"}} src={logo} alt="anhad" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/About">
            About
          </Link>
          <Link className="nav-link" to="/Activites">
            Activites
          </Link>
          <a className="nav-link" href="#">
            Gallery
          </a>
          <Link className="nav-link" to="Trek">
            Treks
          </Link>
          <Link className="nav-link" to="Main">
            Team
          </Link>
          <a className="nav-link" href="#">
            Outreach
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  )
}

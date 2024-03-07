import React from 'react'
import logo from './images/NAC_Navbar.png';
export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed",zIndex:"11111", width:"100%"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img style={{width: "500px",heigth:"100px",marginLeft:"50px"}} src={logo} alt="anhad" />
      </a>
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
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"style={{marginLeft:"450px"}}>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Activites
          </a>
          <a className="nav-link" href="#">
            Gallery
          </a>
          <a className="nav-link" href="#">
            Treks
          </a>
          <a className="nav-link" href="#">
            Team
          </a>
          <a className="nav-link" href="#">
            Outreach
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  )
}

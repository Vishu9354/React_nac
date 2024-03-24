import React from "react";
import '../css/footer.css'
import logo from '../images/NAC_Navbar.png';
import {Link} from "react-router-dom"
export default function footer(){
    return(
        <>
        <div className="footer">
        <div className="footermain">
            
            <div className="footernav">
            <Link className="nav-link active" aria-current="page" to="/About">
            About
          </Link>
          <Link className="nav-link" to="/Activites">
            Activites
          </Link>
          <Link className="nav-link" to="/Gallery">
            Gallery
          </Link>
          <Link className="nav-link" to="Trek">
            Treks
          </Link>
          <Link className="nav-link" to="Main">
            Team
          </Link>
          <Link className="nav-link" to="/Contact">
            Contact Us
          </Link>
            </div>
        <div className="usefullink">
        <i class="fa-brands fa-instagram"></i>
      <p><a href="https://www.instagram.com/nac_iitjmu/">Instagram</a></p>

        </div>
        <div className="footerlocation">
            <p>Contact us</p>
            <p> Phone: </p>
            <p>Mail:</p>
            <p>Monday to friday: </p>
            <p>Address</p>
        </div>

        </div>
        <hr></hr>
        <div className="dev">
        NAC IIT JAMMU Website by: <b>Vishal Kumar</b>
        <img src={logo}></img>
        </div>
        
        </div>
        </>
    )
}
import React from "react";
import '../css/footer.css'
import logo from '../images/NAC_Navbar.png';
import {Link} from "react-router-dom"
import insta from "../images/insta.jpg"
import iit from "../images/iit.png"
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
        <i class=""><img src={insta} style={{borderRadius:"22%"}}/></i>
      <p><a href="https://www.instagram.com/nac_iitjmu/">Instagram</a></p>

        </div>
        <div className="footerlocation">
            <p>Contact us</p>
            <p> Phone: 8700595372 </p>
            <p>Mail: natureclub@iitjammu.ac.in</p>
            <p>Address: Admin Block, IIT Jammu</p>
        </div>

        </div>
        <hr></hr>
        <div className="dev" style={{color:'white',fontSize:'0.8rem'}}>
       <p> <i class="fa-regular fa-copyright"></i>2024 NAC IIT JAMMU Website by: <a><b>Aakash verma</b></a></p>
        <img src={iit} style={{marginLeft:'20%'}}/>
        </div>
        
        </div>
        </>
    )
}
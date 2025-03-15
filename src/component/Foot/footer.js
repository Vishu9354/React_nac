import React from "react";
import '../css/footer.css'
import logo from '../images/NAC_Navbar.png';
import {Link} from "react-router-dom"
import insta from "../images/insta.jpg"
import iit from "../images/iit.png"
export default function footer(){
    return(
        <>
        <div className="footer" >
        <div className="footermain" style={{}}>
            
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
          {/* <Link className="nav-link" to="/Contact">
            Contact Us
          </Link> */}
            </div>
        <div className="footerlocation">
            <p>Contact us</p>
            <p> Phone: 9149706989 </p>
            <p><a href="mailto:natureclub@iitjammu.ac.in">Mail: nature.adventure@iitjammu.ac.in</a></p>
            <p>Address: Admin Block, IIT Jammu</p>
        </div>

        </div>
        <hr></hr>
        <div className="dev" style={{color:'white',fontSize:'0.8rem'}}>
       <p> <i class="fa-regular fa-copyright"></i>2024 NAC IIT JAMMU Website by: <a href="https://github.com/Vishu9354"> <b>Vishal Kumar</b></a></p>
        <img src={iit} style={{marginLeft:'20%'}}/>
        </div>
        
        </div>
        </>
    )
}
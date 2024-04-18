import React from 'react'
import '../css/contact.css'
import "../css/font.css";
import insta from "../images/insta.jpg"
import linkdin from "../images/linkdin.jpg"
import mail from "../images/mail.jpg"
export default function contact() {
  return (
    <div className='main' style={{display:"flex",justifyContent:"space-around"}}>
      <div className='mail icon'>
      <i class=""><img src={mail} style={{height:"65px",width:"65px",borderRadius:"22%"}}/></i>
      <p><a href="mailto:natureclub@iitjammu.ac.in">Mail us</a></p>
      </div>
      <div className='insta icon'>
      <i class=""><img src={insta} style={{height:"55px",width:"55px",borderRadius:"22%"}}/></i>
      <p><a href="https://www.instagram.com/nac_iitjmu/">Instagram</a></p>
      </div>
      <div className='location icon'>
      <i class=""><img src={linkdin} style={{height:"55px",width:"55px",borderRadius:"22%"}}/></i>
      <p><a href="https://in.linkedin.com/in/nac-iit-jammu-551b3b27a">Linked-in</a></p>
      </div>
     
    </div>
  )
}

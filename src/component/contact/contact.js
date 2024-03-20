import React from 'react'
import '../css/contact.css'
export default function contact() {
  return (
    <div className='main' style={{display:"flex",justifyContent:"space-around"}}>
      <div className='mail icon'>
      <i class="fa-solid fa-envelope"></i>
      <p><a href="natureclub@iitjammu.ac.in">Mail us</a></p>
      {/* <p> natureclub@iitjammu.ac.in</p> */}
      </div>
      <div className='location icon'>
      <i class="fa-brands fa-linkedin"></i>
      <p><a href="https://in.linkedin.com/in/nac-iit-jammu-551b3b27a">Linked-in</a></p>
      </div>
      <div className='insta icon'>
      <i class="fa-brands fa-instagram"></i>
      <p><a href="https://www.instagram.com/nac_iitjmu/">Instagram</a></p>
      </div>
    </div>
  )
}

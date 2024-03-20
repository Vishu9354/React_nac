import React from 'react'
import '../css/contact.css'
export default function contact() {
  return (
    <div className='main' style={{display:"flex",justifyContent:"space-around"}}>
      <div className='mail icon'>
      <i class="fa-solid fa-envelope"></i>
      <p>Mail us</p>
      <p> natureclub@iitjammu.ac.in</p>
      </div>
      <div className='location icon'>
      <i class="fa-brands fa-linkedin"></i>
      <p>linkedin</p>
      <p> https://in.linkedin.com/in/nac-iit-jammu-551b3b27a</p>
      </div>
      <div className='insta icon'>
      <i class="fa-brands fa-instagram"></i>
      <p>Instagram</p>
      <p> https://www.instagram.com/nac_iitjmu/</p>
      </div>
    </div>
  )
}

import React from 'react'
import nac from '../images/c_trek.jpg'
import "../css/font.css";

export default function carousel() {
  return (
    <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",backgroundSize:'contain'}}>
    <img src={nac} className="d-block w-100" alt="..." style={{height:'100%',width:'100%'}}/>
               <div className="abt" style={{position:'absolute'}}>
               <h2 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Treks</h2> 
                <h4 style={{color:'white'}}>There is always an adventure waiting in the woods</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/Treks</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

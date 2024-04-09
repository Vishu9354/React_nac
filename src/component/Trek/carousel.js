import React from 'react'
import nac from '../images/bir2.JPG'
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
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",backgroundImage: `url(${nac})`,height:"100%",width:"100%",}}>
               <div className="abt">
               <h2 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Treks</h2> 
                <h4>There is always an adventure waiting in the woods</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/Treks</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

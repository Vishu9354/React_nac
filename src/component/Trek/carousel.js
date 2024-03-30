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
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",backgroundImage: `url(${nac})`}}>
               <div className="abt">
               <h2>Treks</h2> 
                <h4>dfafgs</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/Treks</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

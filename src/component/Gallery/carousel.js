import React from 'react'
import nac from '../images/kheermala6.JPG'
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
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",backgroundImage: `url(${nac})`,height:"100%",width:"100%"}}>
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
               <div className="abt">
               <h2 style={{display:"flex",justifyContent:"center"}}>Gallery</h2> 
                <h4>Picture are taken to make moment unforgettable</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/Gallery</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

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
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",backgroundSize:'contain'}}>
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
    <img src={nac} className="d-block w-100" alt="..." style={{height:'100%',width:'100%'}}/>

               <div className="abt" style={{position:'absolute', paddingTop:'10rem'}}>
               <h2 style={{display:"flex",justifyContent:"center",color:'white'}}>Gallery</h2> 
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

import React from 'react'
import nac from '../images/bir4.JPG'
import "../css/font.css";
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
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",height:'90vh',backgroundSize:'contain'}}>
      <img src={nac} className="d-block w-100" alt="..." style={{height:'100%',width:'100%'}}/>
               <div className="abt" style={{position:'absolute'}}>
               <h2 style={{display:"flex",justifyContent:"center"}}>Activites</h2> 
                <h4>Venture into the unknown, for it is there that true adventure awaits</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/Activites</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

import React from 'react'
import nac from '../images/team_c.jpg'
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
    <div className="carousel-item active" style={{display:"flex",alignItems:"center",justifyContent:"Center",backgroundSize:'cover'}}>
    <img src={nac} className="d-block w-100" alt="..." style={{height:'100%',width:'100%'}}/>

      {/* <img src="..." className="d-block w-100" alt="..." /> */}
               <div className="abt" style={{position:'absolute'}}>
               <h2 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Our Team</h2> 
                <h4>Teamwork is the lifeline of great achievements</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/Team</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

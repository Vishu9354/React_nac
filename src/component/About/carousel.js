import React from 'react'
import nac from '../images/trek_c.jpg'
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
    <div className="carousel-item active" style={{display:"flex",justifyContent:"Center",backgroundSize:'contain'}}>
      <img src={nac} className="d-block w-100" alt="..." style={{height:'100%',width:'100%'}}/>
               <div className="abt" style={{backgroundColor:"rbga(0,0,0,0.5)",position:'absolute'}}>
               <h2 style={{display:"flex",justifyContent:"center", alignContent:'center', position:'relative', marginTop:'10rem'}}>About</h2> 
                <h4 style={{color:'white'}}>We Are Wanderers, We Are NAC</h4> 
               </div>
                
      <div className="carousel-caption d-none d-md-block">
        <h5>Home/About</h5>
      </div>
    </div>
  </div>

 
</div>

  )
}

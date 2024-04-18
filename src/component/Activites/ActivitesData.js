import React from 'react'
import '../css/activity.css'
export default function activitesdata(props) {
  return (
    <>
      <div className='col-4'>
  <div className="flipcard">
  <div className="inner">
    <div className="front" style={{backgroundImage: `url(${props.data.image})`}}><h2>{props.data.name}</h2></div>
    <div className="back" >
    <div class="bg-image"style={{backgroundImage: `url(${props.data.image})`,fontSize:"15px",height:"100%",width:"100%"}}></div>
<div class="bg-text">
  <p>{props.data.des}</p>
</div>
    </div>
  </div>
</div>
</div>
</>
  )
}

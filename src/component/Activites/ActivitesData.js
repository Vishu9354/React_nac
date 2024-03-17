import React from 'react'
import '../css/activity.css'
// import nac from '../images/NAC.jpg'

export default function activitesdata(props) {
  return (
    <>
      <div className='col-4'>
  <div className="flipcard">
  <div className="inner">
    <div className="front" style={{backgroundImage: `url(${props.data.image})`}}>{props.data.name}</div>
    <div className="back" style={{backgroundImage: `url(${props.data.image})`,fontSize:"15px"}}>{props.data.des}</div>
  </div>
</div>
</div>
</>
  )
}

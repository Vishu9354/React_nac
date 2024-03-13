import React from 'react'
import '../css/activity.css'
import nac from '../images/NAC.jpg'

export default function activitesdata(props) {
  return (
    <>
      <div className='col-4'>
  <div className="flipcard">
  <div className="inner">
    <div className="front" style={{backgroundImage: `url(${nac})`}}>{props.data.name}</div>
    <div className="back">{props.data.des}</div>
  </div>
</div>
</div>
</>
  )
}

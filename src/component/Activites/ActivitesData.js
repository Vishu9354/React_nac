import React from 'react'
import '../css/activity.css'
 
export default function activitesdata(props) {
  return (
    <div className="row">
        <div className="col-6">
        <div className="card">
        <div className="introofevent" id="introofevent">
          <p>
          {props.data.des}
          </p>
         
        </div>
        <img src={props.data.image} alt="Loading" />
        <div className="intro">
          <h3>{props.data.name}</h3>
        </div>
      </div>
        </div>
    </div>
  )
}

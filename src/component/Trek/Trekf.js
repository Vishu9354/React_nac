import React from 'react'
import "../css/trek.css"
import "../css/font.css";
export default function Trekf(props) {
  return (
    <>
    <div>
        <div className="card1" style={{width: '18rem'}}>
        <img src={props.data.image} className="card-img-top" alt="..." />
        <div className="cardbody1">
          <div className="trektitle"><h3 style={{marginLeft:"27px",marginTop:"10px"}}>{props.data.name}</h3></div>
          <div className="detail">
            <div className="day">
              <p>{props.data.Days}</p>
              <p>Days</p>
            </div>
            <div className="groupsize">
              <p>{props.data.size}</p>
              <p>Group Size</p>
            </div>
            <div className="day">
              <p>{props.data.difficulty}</p>
              <p>Difficulty</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

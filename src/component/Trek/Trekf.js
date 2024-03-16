import React from 'react'
import "../css/trek.css"
export default function Trekf(props) {
  return (
    <>
    <div className='col-4'>
        <div className="card" style={{width: '18rem'}}>
        <img src={props.data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
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

import React from 'react'
import nac from '../images/NAC.jpg'

export default function teamdata(props) {
  return (
   <>
   <div className='container'>
    <div className='postion'>
        <div className='positionName'>
            <h2>{props.data.title}</h2>
        </div>
        <div className="card" style={{ width: "18rem" }}>
  <img src={nac} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
    {props.dat.name}
    </p>
  </div>
</div>

    </div>
   </div>
   </>
  )
}

import React from 'react'
import Teamdata from './teamdata'
import '../css/team.css'
import nac from '../images/NAC.jpg'

export default function team(props) {
  return (
    <>

{props.team.map((position, index) => (
        <div key={index} className='main'> 
        <div className='detail'>
          <div className='title'> {position.title}</div>
          <div className='member'>
            {position.teamdetail.map((member, memberIndex) => (
              <div key={memberIndex}>
       <div className="card" style={{ width: "18rem" }}>
  <img src={nac} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
    {member.name}
    </p>
  </div>
</div>
              </div>
            ))}
            </div>
        </div>
        </div>
      ))}
    </>
  )
}

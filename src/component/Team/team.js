import React from 'react'
import '../css/team.css'
import "../css/font.css";


export default function team(props) {
  return (
    <>

{props.team.map((position, index) => (
        <div key={index} className='main'> 
        <div className='detail'>
          <div className='title'><h2> {position.title}</h2></div>
          <div className='member'>
            {position.teamdetail.map((member, memberIndex) => (
              <div key={memberIndex}>
       <div className="card" style={{ width: "18rem" }}>
  <img src={member.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <div className='text'>
    <p className="card-text">
    <h3>{member.name}</h3>
    </p>
    <p className='icon'>
    <a href={member.instagram}><i class="fa-brands fa-instagram"></i></a>
    <a href={member.Linkdin}><i class="fa-brands fa-linkedin"></i></a>
    </p>
    </div>
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

import React from 'react'
import '../css/team.css'
import "../css/font.css";
import insta from "../images/insta.jpg"
import linkdin from "../images/linkdin.jpg"

import {Link} from "react-router-dom"


export default function team_2024(props) {
  return (
    <>
<div className='year' style={{display:'flex',justifyContent:'center',fontSize:'2rem', marginTop:'2rem', textDecoration:'none'}} >
            <Link to="/Team_2024" style={{marginRight:'30px',textDecoration:'none'}}>2024-2025</Link>
            <br/>
            <br/>
            <Link  to="/Main" style={{marginRight:'30px',textDecoration:'none'}}>2023-2024</Link>
            <br/>
            <br/>
            <Link to="/Team_2022" style={{textDecoration:'none'}}>2022-2023</Link>
            </div>
{props.team.map((position, index) => (
  
        <div key={index} className='teammain'> 
        
        <div className='teamdetail'>
          <div className='teamtitle'><h2> {position.title}</h2></div>
          <div className='teammember_2024' style={{width:"50vw"}}>
            {position.teamdetail.map((member, memberIndex) => (
              <div key={memberIndex}>
       <div className="teamcard" style={{ width: "18rem" }}>
  {<img src={member.image} className="card-img-top" alt="..." />}
  <div className="card-body">
    <div className='text'>
    <p className="card-text">
    <h3>{member.name}</h3>
    </p>
    <p className='teamicon'>
    <a href={member.instagram}><i class=""><img src={insta} style={{height:"35px",width:"35x",borderRadius:"22%"}}/></i></a>
    <a href={member.Linkdin}><i class=""><img src={linkdin} style={{height:"35px",width:"35px",borderRadius:"22%"}}/></i>
</a>
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

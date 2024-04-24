import React from 'react'
import nac from '../images/g4.jpg'
import "../css/font.css";

export default function aboutpage() {
  return (
  <>
  <div className='aboutmain'>
  <div className='aboutcontianer'>
    <div className='image' style={{backgroundSize:"contain",marign:"100px",height:'60%',width:'100%'}}>
    <img src={nac} className="d-block w-100" alt="..."/>
    </div>
    <div className='about' style={{fontSize:"20px",marginTop:"25px"}}>
    <p>The Nature Club was founded in August 2020 by Dr Yogesh M Nimdeo. It includes various student-driven activities like trekking, nature exploring, workshops, wildlife photography, plantation and awareness programs etc. Later on, the adventurous sports activities carried out by Institute Sports Association were also clubbed with Nature Club in 2022, and the club was renamed Nature and Adventure Club, IIT Jammu (NAC). NAC nurtured nature exploring and adventure activities, which fostered adventure, trekking, and outward-bound activities among the science, and engineering professionals, students, and faculty communities of the Indian Institute of Technology Jammu.</p>
<p>In its enlarged form as of today, NAC encompasses four more sections. They are:</p>
<p>· The Database Management Section</p>
<p>· The Event Management Section</p> 
<p>· The Designing section</p>
<p>· The Workshop Organisation Section</p>
<p>Overall, the organisation of adventure activities, trekking, green workshops, and plantation programmes by the Nature and Adventure Club in the Institute bring harmony among the students towards nature, which awakened the spirit of adventure activities and plantation among the institute community.</p>
    </div>
  </div>
  </div>
  </>
  )
}

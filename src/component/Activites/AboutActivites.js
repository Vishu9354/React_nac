import React from 'react'
import ActivitesData from './ActivitesData.js'
import '../css/activity.css'
import "../css/font.css";

export default function AboutActivites(props) {
  return (
    <>
    <main>  
    <div className='main'>
      <div className='activityrow'>
    { 
        props.activites.map((activity,i)=>(
            <ActivitesData data={activity} key={i}/>
        ))
    }
 </div>
 </div>
 </main>
    </>
  )
}

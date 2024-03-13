import React from 'react'
import ActivitesData from './ActivitesData.js'
import '../css/activity.css'
export default function AboutActivites(props) {
  return (
    <>  
      <div className='row'>

    { 
        props.activites.map((activity,i)=>(
            <ActivitesData data={activity} key={i}/>
        ))
    }
 </div>

    </>
  )
}

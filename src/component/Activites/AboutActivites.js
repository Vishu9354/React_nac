import React from 'react'
import ActivitesData from './ActivitesData.js'
import '../css/activity.css'
export default function AboutActivites(props) {
  return (
    <>
    {
        props.activites.map((activity,i)=>(
            <ActivitesData data={activity} key={i}/>
        ))
    }
    </>
  )
}

import React from 'react'
import Carousel from './carousel'
import RecentEvent from './recent.jsx'
// import UpcomingEvent from './upcomingevent.js'
// import Inaugration from '../images/2.jpg'
// import Inaugration from './Inaugration.jsx'
import '../css/home.css'
export default function home() {

  return (
    <>
    {/* <Inaugration/> */}
    <Carousel/>
   <RecentEvent/>
   {/* <UpcomingEvent/> */}
    </>
  )
}

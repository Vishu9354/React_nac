import React from 'react'
import Carousel from './carousel'
import RecentEvent from './recent.jsx'
import UpcomingEvent from './upcomingevent.js'
import Inaugration from '../images/2.jpg'
import '../css/home.css'
export default function home() {

  return (
    <>
    <Carousel/>
   <RecentEvent/>
   {/* <UpcomingEvent/> */}
    </>
  )
}

import React from 'react'
import Carousel from './carousel'
import RecentEvent from './recent.jsx'
import UpcomingEvent from './upcomingevent.js'
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

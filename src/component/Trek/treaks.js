import React from 'react'
import Carousel from '../Activites/carousel'
import TrekData from './TrekData'
export default function treak() {
    const Trek=[
        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
        },
        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
        },        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
        },        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
        },
        ]

  return (
   <>
   <Carousel/>
   <TrekData treks={Trek}/>
   </>
  )
}

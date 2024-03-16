import React from 'react'
import Carousel from '../Activites/carousel'
import TrekData from './TrekData'
import nac from '../images/NAC.jpg'
export default function treak() {
    const Trek=[
        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
            image: nac
        },
        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
            image: nac

        },     
        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
            image: nac
        },        
        {
            name:"name of Trek",
            Days:"number of days of trek",
            size:"group size of trek",
            difficulty:"difficulty level of trek",
            image: nac

        },
        ]

  return (
   <>
   <Carousel/>
   <TrekData treks={Trek}/>
   </>
  )
}

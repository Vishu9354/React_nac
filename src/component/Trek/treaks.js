import React from 'react'
import Carousel from '../Activites/carousel'
import TrekData from './TrekData'
import nac from '../images/NAC.jpg'
export default function treak() {
    const Trek=[
        {
            name:"NATHATOP TREK",
            Days:"2",
            size:"70",
            difficulty:"Easy-Moderate",
            image: nac
        },
        {
            name:"Kheermala Trek",
            Days:"1",
            size:"20",
            difficulty:"Easy-Moderate",
            image: nac

        },     
        {
            name:"Devi Pindi Trek",
            Days:"1",
            size:"40",
            difficulty:"Moderate",
            image: nac
        },        
        {
            name:"Bir Billing",
            Days:"2",
            size:"60",
            difficulty:"Moderate-Difficult",
            image: nac

        },

        {
            name:"Kedarnath Trek",
            Days:"4",
            size:"17",
            difficulty:"Moderate-Difficult",
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
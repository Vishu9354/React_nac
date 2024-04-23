import React from 'react'
import Carousel from './carousel.js'
import TrekData from './TrekData'
import nac from '../images/NAC.jpg'
import devi from '../images/devipindi2.jpeg'
import kheermala from '../images/kheermala4.JPG'
import hanumangarh from '../images/bir5.JPG'
import nath from '../images/nathatop5.jpg'
import g10 from '../images/g11.jpg'
import k1 from '../images/triund_photo/1.jpg'
import "../css/font.css";

export default function treak() {

    const Trek=[
        {
            name:"Nathatop",
            Days:"2",
            size:"70",
            difficulty:"Easy-Moderate",
            image: nath,
        },
        
        {
            name:"Kheermala",
            Days:"1",
            size:"20",
            difficulty:"Easy-Moderate",
            image: kheermala,
            page:"Kheermalap"
        },     
        {
            name:"Devi Pindi",
            Days:"1",
            size:"40",
            difficulty:"Moderate",
            image: devi,
            page:'devipage'
        },        
        {
            name:"Hanumangarh",
            Days:"2",
            size:"60",
            difficulty:"Difficult",
            image: hanumangarh
        },
        {
            name:"Kedarnath",
            Days:"4",
            size:"17",
            difficulty:"Difficult",
            image: g10,
        },
        {
            name:"Triund",
            Days:"2",
            size:"35",
            difficulty:"Moderate",
            image: k1,

        },
        ]

  return (
   <>
   <Carousel/>
   <TrekData treks={Trek}/>
   </>
  )
}


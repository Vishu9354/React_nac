import React from 'react'
import Carousel from './carousel.js'
import TrekData from './TrekData'
import nac from '../images/NAC.jpg'
import devi from '../images/devipindi2.jpeg'
import kheermala from '../images/kheermala4.JPG'
import hanumangarh from '../images/bir5.JPG'
import nath from '../images/nathatop5.jpg'
import k1 from '../images/triund_photo/1.jpg'
import Nathatop from './Nathatop.jsx'
import Kheermalap from './Kheermalap.jsx'
import devipage from './Devipage.jsx'
import g10 from '../images/g11.jpg'

// import devip from './devi.jsx'
// import Trek from './treaks.js'


import "../css/font.css";
import {Route,Routes} from "react-router-dom"

export default function treak() {

    const Trek=[
        {
            name:"Nathatop",
            Days:"2",
            size:"70",
            difficulty:"Easy-Moderate",
            image: nath,
            page: "Nathatop"
        },
        {
            name:"Kheermala",
            Days:"1",
            size:"20",
            difficulty:"Easy-Moderate",
            image: kheermala,
            page: "Kheermalap"
            // page:"kheermalap"

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
            image: hanumangarh,
            page:'Bir'

        },

        {
            name:"Kedarnath",
            Days:"4",
            size:"17",
            difficulty:"Difficult",
            image: g10,
            page:'kedarnath'

        },
        {
            name:"Triund",
            Days:"2",
            size:"35",
            difficulty:"Moderate",
            image: k1,
            page:'Triund'

        },
        ]

  return (
   <>
    <Carousel/>
   <Routes>
   <Route path="/" element={<TrekData treks={Trek}/>}/>
   <Route path="/Nathatop" element={<TrekData treks={Nathatop}/>}/>
   <Route path="/Kheermalap" element={<TrekData treks={Kheermalap}/>}/>
   <Route path="/devipage" element={<TrekData treks={devipage}/>}/>
   {/* <TrekData treks={Trek}/> */}
   </Routes>
   </>
  )
}

import React from 'react'
import Gallery from './gallery.jsx'
import Carousel from './carousel.js'
import nac from '../images/NAC.jpg'
import bir1 from '../images/bir1.JPG'
import bir2 from '../images/bir2.JPG'
import bir3 from '../images/bir3.JPG'
import bir4 from '../images/bir4.JPG'
import bir5 from '../images/bir5.JPG'
import bir6 from '../images/bir6.JPG'
import bir7 from '../images/bir7.JPG'
import bir8 from '../images/bir8.JPG'
import bir9 from '../images/bir9.JPG'
import birbilling from '../images/birbilling.JPG'
import bungee from '../images/bungee.JPG'
import cherish from '../images/cherush.jpg'
import "../css/font.css";
export default function page() {
  const gallery =[
    {
      image:nac,
  },
  {
    image:bir1,
},
{
  image:bir2,
},
{
  image:bir3,
},
{
  image:bir4,
},
{
  image:bir5,
},
{
  image:bir6,
},
{
  image:bir7,
},
{
  image:bir8,
},
{
  image:bir9,
},
{
  image:birbilling,
},
{
  image:cherish,
},
{
  image:bungee,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},
{
  image:nac,
},

  ]
  return (
    <>
    <Carousel/>
    <Gallery gallery={gallery}/>
    </>
  )
}

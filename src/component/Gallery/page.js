import React from 'react'
import Gallery from './gallery.jsx'
import Carousel from './carousel.js'
import nac from '../images/NAC.jpg'
import "../css/font.css";
export default function page() {
  const gallery =[
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

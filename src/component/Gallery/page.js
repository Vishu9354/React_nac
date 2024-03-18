import React from 'react'
import Gallery from './gallery.jsx'
import Carousel from '../Activites/carousel'
import nac from '../images/NAC.jpg'
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

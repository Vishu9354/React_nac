import React from 'react'
import Gallery from './gallery.jsx'
import Carousel from './carousel.js'
import paragliding from '../images/paragliding.JPG'
import plant1 from '../images/plant1.JPG'
import plant2 from '../images/plant2.JPG'
import plant3 from '../images/plant3.JPG'
import plant4 from '../images/plant4.JPG'
import plant5 from '../images/plant5.JPG'
import plant6 from '../images/plant6.JPG'
import plant7 from '../images/plant7.JPG'
import plant8 from '../images/plant8.JPG'
import preserve from '../images/preseve.jpg'
import nac from '../images/NAC.jpg'
// import nac from '../images/NAC.jpg'
import ddevipindi2 from '../images/ddevipindi2.jpg'
import devi1 from '../images/devi1.jpg'
import devipindi1 from '../images/devipindi1.jpeg'
import devipindi2 from '../images/devipindi2.jpeg'
import devipindi3 from '../images/devipindi3.jpeg'
import discover from '../images/discover.jpg'
import diwas from '../images/diwas.JPG'
import kheermala from '../images/kheermala.jpg'
import kheermala2 from '../images/kheermala2.jpg'
import kheermala3 from '../images/kheermala3.JPG'
import kheermala4 from '../images/kheermala4.JPG'
import kheermala5 from '../images/kheermala5.JPG'
import kheermala6 from '../images/kheermala6.JPG'
import kheermala7 from '../images/kheermala7.JPG'
import nathatop1 from '../images/nathatop1.JPG'
import nathatop2 from '../images/nathatop2.JPG'
import nathatop4 from '../images/nathatop4.JPG'
import nathatop24 from '../images/nathatop24.JPG'
import bir1 from '../images/bir1.JPG'
import bir10 from '../images/bir10.jpg'
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
import p1 from '../images/plantation_photos/p1.JPG'
import p2 from '../images/plantation_photos/p2.JPG'
import p3 from '../images/plantation_photos/p3.JPG'
import p4 from '../images/plantation_photos/p4.JPG'
import p5 from '../images/plantation_photos/p5.JPG'
import p6 from '../images/plantation_photos/p6.JPG'
import p7 from '../images/plantation_photos/p7.JPG'
import p8 from '../images/plantation_photos/p8.JPG'
import p9 from '../images/plantation_photos/p9.JPG'
import p10 from '../images/plantation_photos/p10.JPG'
import p11 from '../images/plantation_photos/p11.JPG'
import p12 from '../images/plantation_photos/p12.JPG'
import p13 from '../images/plantation_photos/p13.JPG'
import p14 from '../images/plantation_photos/p14.JPG'
import p15 from '../images/plantation_photos/p15.JPG'
import p16 from '../images/plantation_photos/p16.JPG'
import "../css/font.css";
export default function page() {
  const gallery =[
    {
      image:nac,
  },
  {
    image:p1,
},
 
{
  image:p11,
},
{
  image:p9,
}, 
 {
  image:p2,
},
 {
  image:p3,
},
 {
  image:p4,
}, 
{
  image:p5,
}, 
{
  image:p6,
}, 
{
  image:p7,
}, 
{
  image:p8,
}, 
 
{
  image:p12,
}, 
{
  image:p13,
}, 
{
  image:p14,
}, 
{
  image:p15,
}, 
{
  image:p16,
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
  image:bir10,
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
  image:ddevipindi2,
},
{
  image:devi1,
},
{
  image:devipindi1,
},
{
  image:devipindi2,
},
{
  image:devipindi3,
},
{
  image:discover,
},
{
  image:diwas,
},
{
  image:kheermala,
},
{
  image:kheermala2,
},
{
  image:kheermala3,
},
{
  image:kheermala4,
},
{
  image:kheermala5,
},
{
  image:kheermala6,
},
{
  image:kheermala7,
},
{
  image:nathatop1,
},
{
  image:nathatop2,
},
{
  image:nathatop24,
},
{
  image:nathatop4,
},
{
  image:paragliding,
},
{
  image:plant1,
},
{
  image:plant2,
},
{
  image:plant3,
},
{
  image:plant4,
},
{
  image:plant5,
},
{
  image:plant6,
},
{
  image:plant7,
},

{
  image:plant8,
},

{
  image:preserve,
},

// {
//   image:nac,
// },

// {
//   image:nac,
// },

// {
//   image:nac,
// },

// {
//   image:nac,
// },

// {
//   image:nac,
// },

// {
//   image:nac,
// },

// {
//   image:nac,
// },

// {
//   image:nac,
// },

  ]
  return (
    <>
    <Carousel/>
    <Gallery gallery={gallery}/>
    </>
  )
}

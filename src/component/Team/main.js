import React from 'react'
import Carousel from './carousel.js'
import "../css/font.css";

import Team from './team.js'
import nac from '../images/NAC.jpg'
import aakash from '../images/aakash.jpg'
import sirja from '../images/sirja.jpg'
import yashP from '../images/yashP.jpg'
import Khushboo from '../images/khushboo.jpg'
import cr from '../images/cr.jpg'
import sakshi from '../images/sakshi.jpg'
import dev from '../images/dev.jpg'
import parth from '../images/parth.jpg'
import yash from '../images/ysah.jpg'
export default function main() {
  const team =[
    {
      title:"Faculty In-Charge",
      teamdetail:[
        {
          name:"Dr.Yogesh Nimdeo",
          instagram:'#',
          Linkdin:'#',
          image:nac,
        },
      ],
    },
    {
      title:"Club Co-ordinator",
      teamdetail:[
        {
          name:"AKASH VERMA",
          instagram:'#',
          Linkdin:'#',
          image:aakash,

        },
      ],
    },
    {
      title:"Head of Event Management",
      teamdetail:[
        {
          name:"Yash Pandey",
          instagram:'#',
          Linkdin:'#',
          image:yashP,

        },
        {
          name:"Khushboo",
          instagram:'#',
          Linkdin:'#',
          image:Khushboo,

        },
        {
          name:"Abhay Krishan",
          instagram:'#',
          Linkdin:'#',
          image:cr,

        },
      ],
    },

    {
      title:"Head of Designing and Content",
      teamdetail:[
 
        {
          name:"Srija Shukla",
          instagram:'https://www.instagram.com/srijashuklaa?igsh=eGxuNDJtamt2Z252',
          Linkdin:'#',
          image:sirja,
        },
      ],
    },

   
    {
      title:"Head of Inventory and Logistics",
      teamdetail:[
        {
          name:"Sakshi Srivastava",
          instagram:'#',
          Linkdin:'#',
          image:sakshi,

        },
        {
          name:"Dev Banitia",
          instagram:'#',
          Linkdin:'#',
          image:dev,

        },
      ],
    },
    {
      title:"Head of Nature Events",
      teamdetail:[
        {
          name:"Abhay Krishan",
          instagram:'#',
          Linkdin:'#',
          image:cr,

        },
      ],
    },
    {
      title:"Head of High Altitude Trek",
      teamdetail:[
        {
          name:"Parth Manjare",
          instagram:'#',
          Linkdin:'#',
          image:parth,

        },
      ],
    },
    {
      title:"Head of Social Media",
      teamdetail:[
        {
          name:"Yash Bhajbhuje",
          instagram:'#',
          Linkdin:'#',
          image:yash,

        },
      ],
    },
  ]
  return (
    
    <>
    <Carousel/>
    <Team team={team}/>
    </>
  )
}

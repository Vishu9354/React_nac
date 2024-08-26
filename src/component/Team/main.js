import React from 'react'
import Carousel from './carousel.js'
import "../css/font.css";

import Team from './team.js'
import Team_2022 from './Team_2022.jsx'

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
import sir from '../images/sir.jpg'

import abhi from '../images/abhishek_2022.jpg' 
import Prashant from '../images/prashant_2022.png' 
import Shivam from '../images/shivam_2022.JPG' 
import ss from '../images/ss_2022.png' 
import vatsal from '../images/vatsal_2022.png' 
import vikash from '../images/vikash_2022.JPG' 
import vansh from '../images/vansh_2022.jpg' 
import {Route,Routes} from "react-router-dom"

export default function main() {
  const team_2024=[
    {
      title:"Faculty In-Charge",
      teamdetail:[
        {
          name:"Dr.Yogesh Nimdeo",
          instagram:'#',
          Linkdin:'#',
          image:sir,
        },
      ],
    },
    {
      title:"Co-ordinator",
      teamdetail:[
        {
          name:"Soham Grover",
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
          name:"Abhay Raghav",
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
      title:"Head of Media Coverage",
      teamdetail:[
        {
          name:"Yash Bhajbhuje",
          instagram:'#',
          Linkdin:'#',
          image:yash,

        },
      ],
    },
    {
      title:"Head of Nature Events",
      teamdetail:[
        {
          name:"Abhay Raghav",
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
  ]
  const team =[
    {
      title:"Faculty In-Charge",
      teamdetail:[
        {
          name:"Dr.Yogesh Nimdeo",
          instagram:'#',
          Linkdin:'#',
          image:sir,
        },
      ],
    },
    {
      title:"Co-ordinator",
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
          name:"Abhay Raghav",
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
      title:"Head of Media Coverage",
      teamdetail:[
        {
          name:"Yash Bhajbhuje",
          instagram:'#',
          Linkdin:'#',
          image:yash,

        },
      ],
    },
    {
      title:"Head of Nature Events",
      teamdetail:[
        {
          name:"Abhay Raghav",
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
    
  ]
  
  const team_2022 =[
  
    {
      title:"Co-ordinator",
      teamdetail:[
        {
          name:"Vikash garg",
          instagram:'#',
          Linkdin:'#',
          image:vikash,

        },

      ],
    }, 
    {
      title:"Team",
      teamdetail:[
        {
          name:"Shivam uniyal",
          instagram:'#',
          Linkdin:'#',
          image:Shivam,
        },
        {
          name:"Satyansh sharma",
          instagram:'#',
          Linkdin:'#',
          image:ss,
        },
        {
          name:"Vansh singh",
          instagram:'#',
          Linkdin:'#',
          image:vansh,
        },
        {
          name:"Prashant singh",
          instagram:'#',
          Linkdin:'#',
          image:Prashant,
        },
        {
          name:"Abhishek verma",
          instagram:'#',
          Linkdin:'#',
          image:abhi,
        },
        {
          name:"Vatsal tyagi",
          instagram:'#',
          Linkdin:'#',
          image:vatsal,
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

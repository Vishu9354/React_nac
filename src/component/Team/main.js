import React from 'react'
import Carousel from '../Activites/carousel'
import Team from './team.js'
import nac from '../images/NAC.jpg'
import sirja from '../images/sirja.jpg'
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
          image:nac,

        },
      ],
    },
    {
      title:"Head of Social Media and Coverage",
      teamdetail:[
        {
          name:"Yash Bhajbhuje",
          instagram:'#',
          Linkdin:'#',
          image:nac,

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
      title:"Head of Event Management",
      teamdetail:[
        {
          name:"Yash Pandey",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
        {
          name:"Khushboo",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
        {
          name:"Abhay Krishan Raghav",
          instagram:'#',
          Linkdin:'#',
          image:nac,

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
          image:nac,

        },
        {
          name:"Dev Banitia",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
      ],
    },
    {
      title:"Head of Nature Events",
      teamdetail:[
        {
          name:"Abhay Krishan Raghav",
          instagram:'#',
          Linkdin:'#',
          image:nac,

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
          image:nac,

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

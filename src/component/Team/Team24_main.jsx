import React from 'react'
import Carousel from './carousel'
import Team_2024 from './Team_2024.jsx'
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
export default function Team24_main() {
    const team_2024 =[
  
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
            name:"SOHAM GROVER",
            instagram:'#',
            Linkdin:'#',
            image:aakash,
  
          },
        ],
      },
      {
        title:"Co-Coordinator",
        teamdetail:[
          {
            name:"Japnoor",
            instagram:'#',
            Linkdin:'#',
            image:aakash,
  
          },
        ],
      },
      {
        title:"Senior Advisor",
        teamdetail:[
          {
            name:"Akash Verma",
            instagram:'#',
            Linkdin:'#',
            image:aakash,
  
          },
        ],
      },
      {
        title:"Heads of Event Management",
        teamdetail:[
          {
            name:"Koushal Jaiman",
            instagram:'#',
            Linkdin:'#',
            image:yashP,
  
          },
          {
            name:"Anshika Kukreja",
            instagram:'#',
            Linkdin:'#',
            image:Khushboo,
  
          },
          {
            name:"Saumya Gupta",
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
            name:"Prisha Suchak",
            instagram:'#',
            Linkdin:'#',
            image:sirja,
          },
        ],
      },
  
     
      {
        title:"Heads of Inventory and Logistics",
        teamdetail:[
          {
            name:"Bhavishya",
            instagram:'#',
            Linkdin:'#',
            image:sakshi,
  
          },
          {
            name:"Vikrant Lalhal",
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
            name:"Yash Faujdar",
            instagram:'#',
            Linkdin:'#',
            image:yash,
  
          },
          {
            name:"Amaan Parashar",
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
            name:"Anish Yadav",
            instagram:'#',
            Linkdin:'#',
            image:cr,
  
          },
        ],
      },
      {
        title:"Head of Web development ",
        teamdetail:[
          {
            name:"Saksham vijay",
            instagram:'#',
            Linkdin:'#',
            image:parth,
  
          },
          {
            name:"Anshak",
            instagram:'#',
            Linkdin:'#',
            image:parth,
  
          },
        ],
      },
    ]
    const team = [
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
  return (
    <>
    <Carousel/>
    <Team_2024 team={team_2024}/>
    </>
  )
}

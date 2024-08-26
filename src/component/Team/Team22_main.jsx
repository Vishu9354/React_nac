import React from 'react'
import Carousel from './carousel'
import Team_2022 from './Team_2022.jsx'


import abhi from '../images/abhishek_2022.jpg' 
import Prashant from '../images/prashant_2022.png' 
import Shivam from '../images/shivam_2022.JPG' 
import ss from '../images/ss_2022.png' 
import vatsal from '../images/vatsal_2022.png' 
import vikash from '../images/vikash_2022.JPG' 
import vansh from '../images/vansh_2022.jpg' 
export default function Team22_main() {
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
    <Team_2022 team={team_2022}/>
    </>
  )
}

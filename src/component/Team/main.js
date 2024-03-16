import React from 'react'
import Carousel from '../Activites/carousel'
import Team from './team.js'
import nac from '../images/NAC.jpg'
export default function main() {
  const team =[
    {
      title:"postion 1",
      teamdetail:[
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,
        },
      ],
    },
    {
      title:"postion 2",
      teamdetail:[
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
      ],
    },
    {
      title:"postion 2",
      teamdetail:[
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
          image:nac,

        },
      ],
    },
    {
      title:"postion 3",
      teamdetail:[
 
        {
          name:"Name of member",
          instagram:'#',
          Linkdin:'#',
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

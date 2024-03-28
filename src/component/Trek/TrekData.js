import React from 'react'
import Trekf from "./Trekf"
import '../css/trek.css'
import "../css/font.css";
export default function TrekData(props) {
  return (
    <>
    <main>
    <div className='row'>
    { 
        props.treks.map((trek,i)=>(
            <Trekf data={trek} key={i}/>
        ))
    }
    </div>
    </main>
    </>
  )
}

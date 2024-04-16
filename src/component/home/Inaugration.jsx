import React from 'react'
import img from '../images/2.jpg'
import '../css/home.css';
export default function Inaugration() {
  const inaugration = ()=>{
    let element1 = document.getElementById('ing');
    element1.classList.add('ingug')
  }
  return (
    <div className='ing' id='ing'>
<img src={img}/>
<button className='click'onClick={inaugration}> Click Here</button>
    </div>
  )
}

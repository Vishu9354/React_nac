import React from 'react'
import "../css/font.css";
import '../css/gallery.css'
export default function gallery(props) {
  return (
    <>
    <div className='gallerymain'>
    <div className='galleryrow'>
    {props.gallery.map((position, index) => (
        <div key={index} className='colgrid'>
          <div className="image" style={{height:"40vh",width:"25vw",backgroundSize:"contain"}}>
            <img src={position.image} style={{height:'100%',width:'100%',marginLeft:'20px'}}/></div> 
        </div>
      ))}
      </div>
      </div>
    </>
  )
}

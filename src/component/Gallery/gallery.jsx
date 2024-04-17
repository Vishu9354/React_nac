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
          <div className="image" style={{height:"250px",width:"250px",marginLeft:'5vw',marginBottom:'5vh',marginTop:'5vh',backgroundSize:"contain"}}>
            <img src={position.image} style={{height:'100%',width:'100%'}}/></div> 
        </div>
      ))}
      </div>
      </div>
    </>
  )
}

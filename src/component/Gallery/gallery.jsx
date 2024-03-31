import React from 'react'
import "../css/font.css";
import '../css/gallery.css'
export default function gallery(props) {
  return (
    <>
    <div className='gallerymain'>
    <div className='row'>
    {props.gallery.map((position, index) => (
        <div key={index} className='col-3'>
          <div className="image" style={{backgroundImage: `url(${position.image})`,height:"250px",width:"250px",margin:"50px",backgroundSize:"cover",}}></div> 
        </div>
      ))}
      </div>
      </div>
    </>
  )
}

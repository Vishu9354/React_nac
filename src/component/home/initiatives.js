import React from 'react'
import nac from '../images/Clean tawi.png'
import "../css/font.css";
export default function upcomingevent() {
  return (
    <section className="upcomingEvent">
  <div className="ttl"><h1>Initiatives</h1></div>
  <div className="upcoming">
    <div
      className="photo"
      style={{
        backgroundImage: `url(${nac})`
      }}
    >
      {/* <img src="E:/WebDevelopment/NAC/Pictures/mountain-peak-through-trees.jpg" alt=""> */}
    </div>
    <div className="content">
      <div className="title"><h2>Name of Initiative</h2></div>
      <div className="about">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        accusamus voluptate sit recusandae porro quam, dolore, labore impedit
        beatae perferendis, est numquam inventore nulla eius voluptatem ex neque
        accusantium! Dignissimos.</p>
      </div>
    </div>
  </div>
</section>
  )
}
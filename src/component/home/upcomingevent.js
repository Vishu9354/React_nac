import React from 'react'
import nac from '../images/NAC.jpg'

export default function upcomingevent() {
  return (
    <section className="upcomingEvent">
  <div className="ttl">Upcoming Event</div>
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
      <div className="title">Event name</div>
      <div className="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        accusamus voluptate sit recusandae porro quam, dolore, labore impedit
        beatae perferendis, est numquam inventore nulla eius voluptatem ex neque
        accusantium! Dignissimos.
      </div>
    </div>
  </div>
</section>
  )
}

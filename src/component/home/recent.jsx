import React from 'react'
// import nac from '../images/NAC.jpg'
import kheermala from '../images/kheermala3.JPG'
import hdfc from '../images/plant3.JPG'
import devi from '../images/devipindi2.jpeg'
import udy from '../images/plant8.JPG'
import jan from '../images/plant6.JPG'
import nath from '../images/nathatop24.JPG'
import '../css/home.css'
import '../js/recentpage.js'
import "../css/font.css";

export default function RecentEventItem(props) {
  const handleNextClick = () => {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  };

  return (
    <>
    {/* <div><h2>{props.data.name}</h2></div> */}
    <section className="recent">
  <div className="maincont">
    <div className="title"><h2>Recent Events</h2></div>
    <div className="container">
      <div id="slide" className='slide'>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nath})`
          }}
        >
          <div className="content">
            <div className="name"><h2>PATNITOP & NATHATOP</h2></div>
            <div className="des">
            <p>The Nature and Adventure Club orchestrated a captivating Eco Trip to Patnitop Nathatop on February 17-18, 2024. Our journey was a tapestry of unforgettable memories as we immersed ourselves in the breathtaking beauty of the mountains and experienced the magical snowfall at Nathatop. The trip was a harmonious blend of nature's wonders and thrilling adventures, leaving an indelible mark on each participant.</p>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${udy})`
          }}
        >
          <div className="content">
            <div className="name"><h2>UDYAMITSAV PLANTATION</h2></div>
            <div className="des">
            <p>As part of CSR initiatives by the Udyamitsav'24 team, a plantation drive was carried out by guests and speakers on the day of the festival with the collaboration of the Nature & Adventure Club 🌱</p>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${kheermala})`
          }}
        >
          <div className="content">
            <div className="name"><h2>KHEERMALA</h2></div>
            <div className="des">
            <p>The Nature and Adventure Club of IIT Jammu organized the Kheermala Trek on January 28, 2024, aiming to instill adventure. Participants experienced breathtaking landscapes, faced physical challenges, fostering camaraderie and teamwork. The trek was a resounding success, promoting adventure, creating lasting memories, and showcasing the beauty of nature.</p>

            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${jan})`
          }}
        >
          <div className="content">
            <div className="name"><h2>JAN JATIYA GAURAV DIWAS</h2></div>
            <div className="des">
            <p>Cultivating a Greener Tomorrow: Nature and Adventure Club celebrates Jan Jatiya Gaurav Diwas with a Plantation Drive, nurturing the roots of 25 Tribal students in the embrace of nature. </p>

            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${hdfc})`
          }}
        >
          <div className="content">
            <div className="name"><h2>HDFC BANK PLANTATION DRIVE</h2></div>
            <div className="des">
            <p>HDFC Bank Partners for Sustainable Progress
The drive holds the dual purpose of enhancing the aesthetic appeal of the campus while fostering shade-rich areas for pedestrians, ensuring a comfortable and eco-friendly environment for all.</p>

            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${devi})`
          }}
        >
          <div className="content">
            <div className="name" style={{color:""}}><h2>DEVI PINDI</h2></div>
            <div className="des">
           <p> The Nature and Adventure Club organized an all-girls trek to Devi Pindi on October 24, 2023, covering 6.5 kilometers of thrilling terrain. Beyond a physical challenge, the trek fostered a deep connection with nature and panoramic views. The event celebrated female camaraderie, emphasizing the power of women in exploring, appreciating, and preserving the beauty of the outdoors. Special thanks were extended to key contributors for their guidance</p>

            </div>
          </div>
        </div>
      </div>
      <div className="buttons" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button id="prevs" className='prevs' onClick={handlePrevClick} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <span
            className="carousel-control-prev-icon"
            id="prev"
            aria-hidden="true" 
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button id="nexts" className='nexts' onClick={handleNextClick} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <span
            className="carousel-control-next-icon"
            id="prev"
            aria-hidden="true" style={{display:"flex",justifyContent:"center",alignItems:"center"}}
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</section>
    </>

  )
}

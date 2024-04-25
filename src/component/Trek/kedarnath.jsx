import React from 'react'
import k1 from '../images/g8.jpg'
import k2 from '../images/g10.jpg'
import k3 from '../images/g11.jpg'
import k4 from '../images/g12.jpg'
// import k5 from '../images/5.jpg'
// import k6 from '../images/6.jpg'
import '../css/trekdetail.css'
export default function kheermalap() {
  return (
    <>
     <div style={{height:'20vh',width:'90w'}}></div>
    <div>
    <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekname'>
            <h1>Kedarnath</h1>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekcontent'style={{display:"flex"}}>
          <div className='trekimage' style={{width:"45vw"}}>
          <img src={k1} alt="loading" style={{width:"35vw"}}/>
          <img src={k2} alt="loading" style={{width:"35vw"}}/>
          <img src={k3} alt="loading" style={{width:"35vw"}}/>
          <img src={k4} alt="loading" style={{width:"35vw"}}/>
          {/* <img src={k5} alt="loading" style={{width:"35vw"}}/>
          <img src={k6} alt="loading" style={{width:"35vw"}}/> */}
          </div>
          <div className='trekdetail'>
            <p>
            The Nature and Adventure Club of IIT Jammu organized a memorable Kheermala Trek on the 28th of January 2024. The purpose of the trek was to instill a sense of adventure among the students and to explore the undiscovered beauty of the Himalayas in the Jammu and Kashmir region.<br/>
            <br/>

The participants were treated to a spectacular adventure, immersing themselves in the pristine beauty of the Himalayan landscapes. The trek provided an opportunity for students to connect with nature, breathe in the fresh mountain air, and experience the thrill of conquering challenging terrains.<br/>
<br/>

<b>Scenic Highlights:</b><br/>

The Kheermala Trek unveiled breathtaking vistas, with majestic mountain ranges, dense forests, and serene meadows captivating the trekkers at every turn. The unexplored beauty of Jammu and Kashmir added a sense of novelty to the journey, making it a unique and enriching experience for all.
<br/>
<br/>

<b>Trekking Experience:</b>
<br/>
The trek posed various challenges, testing the physical endurance and mental resilience of the participants. Crossing rugged terrains, navigating through narrow trails, and conquering steep ascents heightened the sense of accomplishment among the trekkers.
<br/>
<br/>
The trek fostered strong bonds among the participants. Facing challenges together created a sense of camaraderie and teamwork, enhancing the overall experience of the trek. Shared moments of awe and triumph further strengthened the connections forged during the journey.
<br/>
<br/>
<b>Conclusion:</b>
<br/>
<br/>
The Kheermala Trek organized by the Nature and Adventure Club of IIT Jammu was a resounding success, leaving a lasting impact on the participants. The trek not only fulfilled its objective of promoting adventure among students but also provided a platform for unforgettable memories and personal growth. It was a testament to the beauty of nature and the spirit of exploration that thrives in the hearts of young adventurers.
            </p>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

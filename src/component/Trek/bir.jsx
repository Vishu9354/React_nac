import React from 'react'
import k1 from '../images/bir_billing_photos/1.jpg'
import k2 from '../images/bir_billing_photos/2.jpg'
import k3 from '../images/bir_billing_photos/3.jpg'
// import k4 from '../images/bir_billing_photos/4.jpg'
// import k5 from '../images/bir_billing_photos/5.jpg'
// import k6 from '../images/bir_billing_photos/6.jpg'
import '../css/trekdetail.css'
export default function kheermalap() {
  return (
    <>
     <div style={{height:'20vh',width:'90w'}}></div>
    <div>
    <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekname'>
            <h1>Hanumangarh</h1>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekcontent'style={{display:"flex"}}>
          <div className='trekimage' style={{width:"45vw"}}>
          <img src={k1} alt="loading" style={{width:"35vw"}}/>
          <img src={k2} alt="loading" style={{width:"35vw"}}/>
          <img src={k3} alt="loading" style={{width:"35vw"}}/>
          {/* <img src={k4} alt="loading" style={{width:"35vw"}}/>
          <img src={k5} alt="loading" style={{width:"35vw"}}/>
          <img src={k6} alt="loading" style={{width:"35vw"}}/> */}
          </div>
          <div className='trekdetail'>
            <p>
            The Nature and Adventure Club (NAC) of our institute orchestrated a thrilling expedition to Bir Billing, Himachal Pradesh, from September 30th to October 3rd. This expedition was designed to offer students a diverse range of adventurous activities, fostering their connection with nature and the spirit of adventure by Dr. Yogesh Nimdeo (FIC - NAC, IIT Jammu) and Mr. Akash Varma (NAC student Co-ordinator).
<br/>
<br/>
<b>Trekking Adventures:</b>
<br/>

Our students embarked on an unforgettable journey, beginning with a challenging trek to Hanuman Garh, situated at an impressive altitude of 3200 meters. This demanding trek showcased the students' resilience and determination, as they conquered the arduous terrain, demonstrating their unwavering spirit. The expedition also featured a descent trek to the picturesque Rajgundha Valley, allowing our students to immerse themselves in the awe-inspiring natural beauty of the region. This trek, while less strenuous, provided a unique opportunity to explore and appreciate the Himalayan landscape.
<br/>
<br/>
<b>Aerial Adventures:</b>
<br/>
The expedition took flight with paragliding at Billing, known as the world's second-highest paragliding site. Students soared through the skies, taking in the breathtaking vistas below, creating lasting memories of this extraordinary experience. Additionally, the adventure reached new heights with the inclusion of bungee jumping, an exhilarating activity that added an extra layer of excitement to the expedition. Participants reveled in the adrenaline rush and returned with a sense of accomplishment.
<br/>
<b>Milestone Achievement:</b>
<br/>
The expedition to Bir Billing also marked a significant milestone as it was the first time that the students of IIT Jammu participated in paragliding and bungee jumping. This achievement is a testament to the club's dedication to introducing new and exhilarating experiences to its members, and it underscores the growth and adventurous spirit of the students. Additionally, the trek to Hanuman Garh at an altitude of 3200 meters was the highest altitude at which the students had ever trekked, further highlighting their determination and the club's commitment to pushing boundaries.
<br/>
In line with the club's motto, "Discover. Cherish. Preserve !" the Nature and Adventure Club delivered an exceptional adventure that enabled students to embrace this philosophy. This expedition to Bir Billing, Himachal Pradesh, not only encouraged students to explore captivating landscapes and participate in thrilling activities but also instilled in them a profound appreciation for nature and the spirit of adventure. The memories and lessons from this expedition will undoubtedly serve as a lasting source of inspiration, motivating students to continue their journey of exploration and discovery.  </p>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

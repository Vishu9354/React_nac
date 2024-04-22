import React from 'react'
import k1 from '../images/devi_photos/1.jpg'
import k2 from '../images/devi_photos/2.jpg'
// import k3 from '../images/kheemalaimage/3.jpg'
// import k4 from '../images/kheemalaimage/4.jpg'
// import k5 from '../images/kheemalaimage/5.jpg'
// import k6 from '../images/kheemalaimage/6.jpg'
import '../css/trekdetail.css'
export default function kheermalap() {
  return (
    <>
     <div style={{height:'20vh',width:'90w'}}></div>
    <div>
    <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekname'>
            <h1>Devi Pindi</h1>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekcontent'style={{display:"flex"}}>
          <div className='trekimage' style={{width:"45vw"}}>
          <img src={k1} alt="loading" style={{width:"35vw"}}/>
          <img src={k2} alt="loading" style={{width:"35vw"}}/>
          {/* <img src={k3} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k4} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k5} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k6} alt="loading" style={{width:"35vw"}}/> */}
          </div>
          <div className='trekdetail'>
            <p>
            On October 24, 2023, the Nature and Adventure Club organized an exclusively girls' trek to the stunning Devi Pindi Trek. Covering a distance of 6.5 kilometers, this adventure was nothing short of thrilling and captivating.<br/>
<br/>
The trek was a remarkable experience, filled with excitement and the beauty of the great outdoors. Participants embarked on a journey that not only tested their physical endurance but also provided an opportunity to connect with nature on a profound level. As the girls trekked their way to the top, they were rewarded with breathtaking scenic beauty that left them in awe. The panoramic views from the summit were nothing short of amazing, serving as a reminder of the natural wonders that surround us.
<br/>
<br/>

This girls-only trek to Devi Pindi was more than just a physical challenge; it was a chance to bond with fellow adventurers, immerse oneself in the beauty of the natural world, and create lasting memories. It served as a testament to the power of women coming together to explore, appreciate, and protect the wonders of the great outdoors.<br/>
<br/>

Special thanks to Dr. Yogesh Nimdeo (FIC - NAC, IIT Jammu), Col. Pratap Singh Rathore Mrs. Nandita Sharma and Mr. Akash Verma (NAC- Student Coordinator) for there consistence guidance during trek.
            </p>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

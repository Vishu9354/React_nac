import React from 'react'
import k1 from '../images/triund_photo/1.jpg'
// import k2 from '../images/kheemalaimage/2.jpg'
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
            <h1>Triund</h1>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className='trekcontent'style={{display:"flex"}}>
          <div className='trekimage' style={{width:"45vw"}}>
          <img src={k1} alt="loading" style={{width:"35vw"}}/>
          {/* <img src={k2} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k3} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k4} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k5} alt="loading" style={{width:"35vw"}}/> */}
          {/* <img src={k6} alt="loading" style={{width:"35vw"}}/> */}
          </div>
          <div className='trekdetail'>
            <p>
            Institute Nature Club (INC) conducted a 3-Day trip to Dharamshala, Mcleodganj, Naddi with a trek to Triund (Dhauladhar Ranges) of altitude 2875m and a trek distance of 9 km (one-way) from 5th to 7th of August 2022. It was the pleasure of the INC team for organizing this trip for the students, staff, and faculty of IIT Jammu. We shared a lot of wonderful memories experienced on the trek and tour and we congratulate all 21 participants for successfully completing the trek. The trip was followed by visiting the Buddha Monastery (Dalai lama temple), Bhagsunath temple and Waterfall, St. John in the Wilderness Church, the local market of Dharamshala, and Mcleodganj.

</p>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

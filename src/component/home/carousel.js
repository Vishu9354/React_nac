import React from 'react'
import '../css/home.css'
import discover from '../images/bir_billing_photos/4.jpeg'
import CHERISH from '../images/cherush.jpg'
import PRESERVE from '../images/preseve.jpg'
import "../css/font.css";
export default function carousel() {
  return (
<section className="heroimage">
  <div id="carousel" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner" >
      <div
        className="carousel-item active"
        style={{
          backgroundImage: `url(${discover})`,backgroundSize:'cover',width:'100%'
        }}
      >
        {/* <img src={discover} style={{height:'100%',width:'100%'}}/> */}
        <div className="container">
          <h2>DISCOVER</h2>
          <p>Discover the untamed beauty and thrilling adventures</p><p> that nature has in store for those who seek it.</p>
        </div>
      </div>
      <div
        className="carousel-item"
        style={{ backgroundImage: `url(${CHERISH})`, backgroundRepeat:'no-repeat',backgroundSize: 'cover'}}
      >
        <div className="container">
          <h2 style={{color:'#023e8a'}}>CHERISH</h2>
          <p>It is not the mountain we conquer, but ourselves.</p>
        </div>
      </div>
      <div
        className="carousel-item"
        style={{
          backgroundImage: `url(${PRESERVE})`,
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <h2>PRESERVE</h2>
          <p>To walk in nature is to witness a thousand miracles.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

  )
}

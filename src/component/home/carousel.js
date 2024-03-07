import React from 'react'
import '../css/home.css'
import NAC from '../images/NAC.jpg'
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
    <div className="carousel-inner">
      <div
        className="carousel-item active"
        style={{
          backgroundImage: `url(${NAC})`
        }}
      >
        <div className="container">
          <h2>welcome To</h2>
          <p>NAC</p>
        </div>
      </div>
      <div
        className="carousel-item"
        style={{ backgroundImage: `url(${NAC})` }}
      >
        <div className="container">
          <h2>welcome To</h2>
          <p>NAC</p>
        </div>
      </div>
      <div
        className="carousel-item"
        style={{
          backgroundImage: `url(${NAC})`
        }}
      >
        <div className="container">
          <h2>welcome To</h2>
          <p>NAC</p>
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

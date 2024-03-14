import React from 'react'
import nac from '../images/NAC.jpg'
import '../css/home.css'
import '../js/recentpage.js'
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
    <div className="title">Recent Events</div>
    <div className="container">
      <div id="slide" className='slide'>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name"></div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name">Nadcdv</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name">abc</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name">abc</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name">abc</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name">NAC</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${nac})`
          }}
        >
          <div className="content">
            <div className="name">NAC</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              doloremque itaque optio? Mollitia, sequi recusandae quam ea
              nostrum assumenda quos voluptate minima, natus voluptatem debitis
              blanditiis illum amet consectetur impedit.
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prevs" className='prevs' onClick={handlePrevClick}>
          <span
            className="carousel-control-prev-icon"
            id="prev"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button id="nexts" className='nexts' onClick={handleNextClick}>
          <span
            className="carousel-control-next-icon"
            id="prev"
            aria-hidden="true"
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

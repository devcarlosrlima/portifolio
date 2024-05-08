
import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/home.scss'

const Home = () => {
  return (
   <div>
    <Navbar />
    <section className="Home">
      
      
      <div className="presentation">
            <h1>I'm Carlos Lima </h1>
            <div className='textAnimate'>
            <h3 >Software Engiennier</h3></div>
            <p>Graduated in Full Stack Software Development from the DNC School, <br/>
            Studying Software Engineering at Ampli by Anhanguera College.<br/>
            "Passion and perseverance open doors that seemed closed before"</p>

            <div className="buttonPresentation">
              <a href="/" className='btn'>Hire me</a>
              <a href="/" className='btn'>Let's talk </a>
            </div>

          </div>

          <div className="socialMedia">
           <a href=""><img src="insta.svg" alt="" /></a>
           <a href=""><img src="linkedin.svg" alt="" /></a>
           <a href=""><img src="github.svg" alt="" /></a>
          </div>
          
    </section>      
    </div>
   
  )
}

export default Home
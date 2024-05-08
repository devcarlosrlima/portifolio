import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import "../Styles/about.scss"

const About = () => {

  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };


  return (
    <div>
      <Navbar />
      
      <section className='about' id='about'>
        <h2 className='heading'> About <span>Me</span></h2>

        <div className='about-img'>
          <img src="perfil.jpg" alt="" />
          <span className='circle-spin'></span>
        </div>

        <div className='about-content'>
          <h3> Software Engiennier!</h3>
          <p>
            {showFullText ? (
              <>
                Born in Maceió, Alagoas, in the heart of the Brazilian Northeast, since childhood,
                he showed an unparalleled curiosity about how electronic toys worked and the technology behind them.
                Always ahead in school, his thirst for knowledge set him apart, showcasing an above-average IQ from an early age.<br/>
                As adolescence approached, his interest in software development became a passion.A self-learner by nature, he delved into this
                fascinating world on his own, turning his hobby into a promising career. He embarked on his programming journey, learning on his
                own and exploring new horizons until deciding to formalize his education, starting this year in Software Engineering.<br/>
                Self-taught in various areas, from playing the guitar to mastering programming, his determination to learn English is just
                another example of his constant desire for improvement and refinement. Each challenge is seen as an opportunity for growth, 
                fueling his motivation to keep moving forward and expanding his knowledge every day. A journey marked by passion, continuous 
                learning, and an unwavering quest for mastery of technology and knowledge.<br/>
                Guided by the motto "Great things never come from the comfort zone," he embraces
                challenges with courage, understanding that it is in moments of adversity that the true champion within himself is revealed.
              </>
            ) : (
              <>
                Born in Maceió, Alagoas, in the heart of the Brazilian Northeast, since childhood,
                he showed an unparalleled curiosity about how electronic toys worked and the technology behind them.
                Always ahead in school, his thirst for knowledge set him apart, showcasing an above-average IQ from an early age.<br/>
              </>
            )}
          </p>
        </div>

        <div className="btn-box btns">
          <button onClick={handleToggleText} className="btn">
            {showFullText ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
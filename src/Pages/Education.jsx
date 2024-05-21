import React from 'react'
import Navbar from '../components/Navbar'
import '../Styles/education.scss'
const Education = () => {
  return (
    <div>
      <Navbar/>
        <section className='education' id='education'>
          <h2 className='heading'>My <span>Journey</span></h2>

          <div className="education-row">
            <div className="education-column">
              <h3 className="title">Education</h3>

              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year"><i className='icon'><box-icon size="1.8rem" color='white' name='calendar'/></i> 2024 - In Progress</div>
                    <h3>Software engineer</h3>
                    <p>In software engineering college, I develop skills in planning,
                       developing, and maintaining software systems. I learn to design 
                       architectures, write efficient code, conduct tests, 
                      and manage projects using methodologies like Agile and Scrum.</p>
                  </div>
                </div>
              </div>


              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year"><i className='icon'><box-icon size="1.8rem" color='white' name='calendar'/></i> 2023 - 2024</div>
                    <h3>Full Stack Developer</h3>
                    <p> My Full Stack Development training focused on JavaScript (Node.js),
                       TypeScript, and React. I learned to create APIs, model databases,
                        and gained basic Cloud knowledge. Now, I can handle both frontend (React)
                        and backend (Node.js) tasks. These skills are essential for building robust
                         applications, meeting current market demands. </p>
                  </div>
                </div>
              </div>



            </div>

            <div className="education-column">
              <h3 className="title">Expirience</h3>

              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year"><i className='icon'><box-icon size="1.8rem" color='white' name='calendar'/></i> 2024 - In Progress</div>
                    <h3>Software engineer</h3>
                    <p>In software engineering college, I develop skills in planning,
                       developing, and maintaining software systems. I learn to design 
                       architectures, write efficient code, conduct tests, 
                      and manage projects using methodologies like Agile and Scrum.</p>
                  </div>
                </div>
              </div>


              <div className="education-box">
                <div className="education-content">
                  <div className="content">
                    <div className="year"><i className='icon'><box-icon size="1.8rem" color='white' name='calendar'/></i> 2023 - 2024</div>
                    <h3>Full Stack Developer</h3>
                    <p> My Full Stack Development training focused on JavaScript (Node.js),
                       TypeScript, and React. I learned to create APIs, model databases,
                        and gained basic Cloud knowledge. Now, I can handle both frontend (React)
                        and backend (Node.js) tasks. These skills are essential for building robust
                         applications, meeting current market demands. </p>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </section>
    </div>
  )
}

export default Education
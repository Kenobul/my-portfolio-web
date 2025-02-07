import React from 'react'
import ken_pic from '../../assets/kenato.jpg'
import './About.css';
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-right">
          <img src={ken_pic} alt="" />
        </div>
        <div className="about-left">
          <div className="about-para">
            <p>My name is Ken, and I have been practicing web development for the past five years. During this time, I have gained strong skills in building responsive and user-friendly websites.</p>

            <p>Beyond web development, I am passionate about software development and enjoy learning new techniques to create innovative solutions. This has shaped me into a versatile and creative developer.</p>


          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '80%'}}></hr></div>
            <div className="about-skill"><p>Javascript</p><hr style={{ width: '70%' }}></hr></div>
            <div className="about-skill"><p>React Js Library</p><hr style={{ width: '75%' }}></hr></div>
            <div className="about-skill"><p>Next Js</p><hr style={{ width: '30%' }}></hr></div>
          </div>



        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>67+</h1>
          <p>BUILT PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
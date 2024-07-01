import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (

    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
    
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decode of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestious organizations, contributing to their success and growth.</p>
                <p>My passion for technology and problem-solving has led me to develop a strong skill set in HTML, CSS, JavaScript and React. I am constantly seeking out new challenges and opportunities to expand my knowledge and skills.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML</p><hr style={{width: "90%"}} /></div>
                <div className="about-skill"><p>CSS</p><hr style={{width: "80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "75%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>

  )
}

export default About

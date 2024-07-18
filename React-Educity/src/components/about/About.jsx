import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import Play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={Play_icon} alt="" className='play-icon' />
        </div>

        <div className="about-right">

            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>A university that embodies this slogan would prioritize the growth and development of its students, recognizing that they are the leaders of the future. Here are some ways a university might foster a culture of leadership development.</p>
            <p>Offer specialized programs, workshops, and courses that focus on leadership skills, such as communication, problem-solving, and decision-making.Provide students with opportunities to apply theoretical knowledge in real-world settings, developing their practical skills and confidence.s</p>
            
        </div>
        
    </div>
  )
}

export default About

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (

    <div className='hero' id='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
      <p>I am frontend developer from california, USA with 10 years of experience. My passion is to create beautiful and functional websites and web applications.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>

  )
}

export default Hero

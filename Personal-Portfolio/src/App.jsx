import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Service from './components/services/Service'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import arrow from './assets/arrow_icon.svg'

const App = () => {
  return (
    <div>
      <AnchorLink className='top-nav' offset={50} href='#navbar'><img className='arrow' src={arrow} alt="" style={{transform: 'rotate(-90deg)'}} /></AnchorLink>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

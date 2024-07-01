import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {


  const [menu, setmenu] = useState('')

  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-250px'
  }
  return (

    <div className='navbar' id='navbar'>
      <img src={logo} alt="" />
      <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt="" className='nav-mob-close' />

        <li><AnchorLink className='anchor-link' href='#hero'><p onClick={() => {
          setmenu("home")
        }
        }>Home</p></AnchorLink>{menu==='home' ? <img src={underline} alt="" /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => {
          setmenu("about")
        }
        }>About Me</p></AnchorLink>{menu==='about' ? <img src={underline} alt="" /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() => {
          setmenu("service")
        }
        }>Services</p></AnchorLink>{menu==='service' ? <img src={underline} alt="" /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => {
          setmenu("work")
        }
        }>Portfolio</p></AnchorLink>{menu==='work' ? <img src={underline} alt="" /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => {
          setmenu("contact")
        }
        }>Contact</p></AnchorLink>{menu==='contact' ? <img src={underline} alt="" /> : null}</li>
        
      </ul>
      <div className="nav-connect">
       <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>

  )
}

export default Navbar

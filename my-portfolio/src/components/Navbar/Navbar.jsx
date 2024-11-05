import React from 'react'
import './Navbar.css'
import logo from '../../assets/download.png'

function Navbar() {
    return (
        <nav>
          <div className='navbar'>
            <img src={logo} alt='' className='nav-image'></img>
            <a href="/" className='nav_link'>Home</a>
            <a href="/about" className='nav_link'>About</a>
            <a href="/projects" className='nav_link'>Projects</a>
            <a href="/contact" className='nav_link'>Contact</a>
          </div>
        </nav>
      );
}

export default Navbar
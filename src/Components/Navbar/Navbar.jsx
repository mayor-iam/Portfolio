import React from 'react'
import './Navbar.css'
import logo from '../../assets/smk.png'

function Navbar() {
  return (
    <div className='navbar'>
      <span><img src={logo} alt="" />Steve</span>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">connect me</div>
    </div>
  )
}

export default Navbar

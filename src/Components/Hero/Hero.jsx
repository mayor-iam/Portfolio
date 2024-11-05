import React from 'react'
import './Hero.css'
import profile_img from '../../assets/sko.png'

function Hero() {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <div>
            <h1>meet <span>Stephen K. Ogunleye</span>, a consummate full-stack developer.</h1>
            <p>A dedicated full-stack developer actively engaged in SAIL's Software Development program, focusing on high-quality, user-centered applications. His portfolio includes a Kuda App clone, REST Countries API, responsive product cart app, and landing pages for Funiro and Nexcent.</p>
            <div className="hero-action">
                <div className="hero-connect">connect</div>
                <div className="hero-resume">resume</div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    </div>
  )
}

export default Hero

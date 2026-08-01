import React from 'react'
import'./hero.css'
import resume from "../../resume/Ayush_Resume.pdf"

const Hero = () => {
  return (
   
    <div id='home' className="hero">
        <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f642.svg" alt="" />
        <h1><span>I'm Ayush Bhongade,</span> Frontend Developer</h1>
        <p>I build clean, modern interfaces and enjoy crafting smooth user experiences.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>

              <a href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume">My resume</a>
              
        </div>
    </div>
  )
}

export default Hero
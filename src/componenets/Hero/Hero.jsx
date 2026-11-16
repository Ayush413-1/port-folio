import React from 'react'
import'./hero.css'
import resume from "../../resume/Ayush CV.pdf"
import profilePhoto from "../../assets/Passport Photo 2 new.jpeg";

const Hero = () => {
  return (
   
    <div id='home' className="hero">
        <img className='profilephoto' src={profilePhoto} alt="" />
        <h1><span>I'm Ayush Bhongade,</span> Java Developer</h1>
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
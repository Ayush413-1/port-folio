import React from 'react'
import './about.css'

const About = () => {
  return (
    <div id='abhout' className="about">

      <div id='about' className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">

        <div className="about-left">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f642.svg" alt="" />
        </div>

        <div className="about-right">

          <div className="about-para">
            <p>
  I am a passionate MERN Stack Developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. I enjoy building responsive, user-friendly web applications and continuously improving my skills by working on real-world projects.
</p>

<p>
  I have developed full-stack projects such as a Zomato Reel Style application , which have strengthened my understanding of frontend development, backend APIs, authentication, database management, and responsive design. I am eager to learn new technologies and contribute to impactful software development projects.
</p>

          </div>

          <div className="about-skills">

  <div className="about-skill">
    <p>HTML & CSS</p>
    <hr style={{ width: "90%" }} />
  </div>

  <div className="about-skill">
    <p>JavaScript</p>
    <hr style={{ width: "80%" }} />
  </div>

  <div className="about-skill">
    <p>React.js</p>
    <hr style={{ width: "80%" }} />
  </div>

  <div className="about-skill">
    <p>Node.js & Express.js</p>
    <hr style={{ width: "85%" }} />
  </div>

  <div className="about-skill">
    <p>MongoDB</p>
    <hr style={{ width: "90%" }} />
  </div>

</div>

        </div>
      </div>
    </div>
  )
}

export default About
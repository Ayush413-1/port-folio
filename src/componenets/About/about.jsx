
import React from "react";
import "./about.css";
import profilePhoto from "../../assets/Passport Photo 2 new.jpeg";

const About = () => {
  const skills = [
    { name: "Java & OOP", width: "85%" },
    { name: "Spring Boot & Spring MVC", width: "75%" },
    { name: "REST API Development", width: "80%" },
    { name: "MySQL & PostgreSQL", width: "80%" },
    { name: "React.js & JavaScript", width: "70%" },
  ];

  return (
    <section id="about" className="about">

      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">

        <div className="about-left">
          <img className="profilephoto"
            src={profilePhoto}
            alt="Smiling illustration"
          />
        </div>

        <div className="about-right">

          <div className="about-para">
            <p>
              I am a passionate Java Backend Developer with a
              strong foundation in Java, Object-Oriented
              Programming (OOP), Spring Boot, and REST API
              development. I enjoy building scalable backend
              applications, designing efficient database
              solutions, and developing reliable software systems.
            </p>

            <p>
              I have developed projects such as ReWear, a
              clothing rental platform, gaining practical
              experience in backend development, authentication,
              database management, API integration, and
              application deployment. I am continuously
              improving my problem-solving skills and eager
              to contribute to impactful software development
              projects.
            </p>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: skill.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="about-achievements">

        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Developed</p>
        </div>

        <div className="about-achievement">
          <h1>8.10</h1>
          <p>Academic CGPA</p>
        </div>

        <div className="about-achievement">
          <h1>2027</h1>
          <p>Graduation Year</p>
        </div>

      </div>

    </section>
  );
};

export default About;


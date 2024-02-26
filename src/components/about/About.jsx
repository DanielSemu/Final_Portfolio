import React from 'react'
import "./about.css"
import Me from '../../assets/heroImage.jpg'

const About = () => {
  return (
        <section className="about container section" id='about'>
          <h2 className="section_title">About Me</h2>
          
          <div className="about_container grid">
            <img src={Me} alt="" />
          
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
              I am Daniel Semu, Web Developer From AA Ethiopia. I have rich Experiance in website Design and building and customization, aslo I am good at Algorithms
              </p>
              <a href="https://drive.google.com/file/d/1a7KZhNu6hQ-qMkEXqYDoiQA-JDC0gu78/view?usp=drive_link" target='_blank'  rel="noreferrer" className="btn">Download CV</a>
            </div>
            <div iv className="about_skills grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Development</h3>
                  <span className="Skills_number">90%</span>
                </div>

                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>



      <div className="skills_data">
        <div className="skills_titles">
        <h3 className="skills_name">UX/UI design</h3>
        <span className="Skills_number ">85%</span>
        </div>
        <div className="skills_bar">
          <span className="skills_percentage ui_design"></span>
        </div>
      </div>



      <div className="skills_data">
        <div className="skills_titles">
        <h3 className="skills_name">Algorithms</h3>
        <span className="Skills_number ">80%</span>
        </div>
        <div className="skills_bar">
          <span className="skills_percentage photography"></span>
        </div>
        </div>
        </div>
      </div>
    </div>

  </section>

    
  )
}
export default About

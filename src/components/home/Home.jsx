import React from 'react'
import './home.css'
import Me from "../../assets/heroImage.jpg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" />
        <h1 className="home_name">Daniel Semu</h1>
        <span className="home_education">I am Full Stack Developer</span>
        <HeaderSocials/>
        <a href="#contact" className="btn">Hire Me </a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home

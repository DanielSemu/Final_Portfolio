import React from 'react'
import './resume.css'
import data from './Data'
import Card from './Card'
const Resume = () => {
  return (
    <section className='resume section container' id="resume">
      <h2 className='section_title'>Experience</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {data.map((val,id)=>{
            if (val.category === "education"){
              return(
               <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
            return null;
          })}
        </div>

        <div className="timeline grid">
          {data.map((val,index)=>{
            if (val.category === "experiance"){
              return(
               <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
            return null;
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume

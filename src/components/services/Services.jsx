import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/android.svg'
import ServiceList from './ServiceList'
const data=[
  {
    id:1,
    image:Image2,
    title:"Web Development",
    description:"I offer personalized web development with HTML, CSS, JavaScript, Node.js, and Django, crafting intuitive designs and robust functionality for your needs."

  },
  {
    id:2,
    image:Image1,
    title:"UI/UX design",
    description:"I specialize in UI/UX design, creating intuitive interfaces with attention to user experience and aesthetic appeal, ensuring seamless digital interactions."

  },
  
  {
    id:3,
    image:Image3,
    title:"Application Development",
    description:"I offer bespoke application development services, leveraging cutting-edge technologies to create scalable and efficient solutions tailored to your unique requirements. "

  }
]
const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h1 className="section_title">Services</h1>
      <div className="services_container grid">
        {
          data.map((item,i)=>{
            return( <ServiceList key={i} id={item.id} title={item.title} description={item.description} image={item.image}/>)
          })
        
    }
      </div>
    </section>
  )
}

export default Services

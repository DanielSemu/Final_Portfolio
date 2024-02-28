import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/android.svg'
import ServiceList from './ServiceList'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials container section" id='services'>
    <h2 className="section_title">
      Services
    </h2>
    <Swiper className="testimonials_container grid"
     // install Swiper modules
     modules={[Pagination]}
     spaceBetween={30}
     slidesPerView={1}
     loop={true}
     grabCursor={true}
     pagination={{ clickable: true }}
    >
    { data.map(({id,image,title,description})=>{
      return(
        <SwiperSlide className="testimonial_item" key={id}>
          <div className="thumb">
            <img src={image} alt="" />
          </div>
          <h3 className="testimonial_title">{title}</h3>
          <span className="subtitle">{description}</span>
          <br /><br />
        </SwiperSlide>
      )
    })}
    </Swiper>
    </section>
  )
}

export default Services

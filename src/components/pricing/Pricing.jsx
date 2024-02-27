import React from 'react'
import Slider from 'react-slick';
import './pricing.css'

import Image1 from '../../assets/avatar-1.svg'
import Image2 from '../../assets/avatar-2.svg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data =[
  {
    id:1,
    image:Image1,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  {
    id:2,
    image:Image2,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  {
    id:2,
    image:Image2,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  {
    id:2,
    image:Image2,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  {
    id:2,
    image:Image2,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  {
    id:2,
    image:Image2,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  {
    id:2,
    image:Image2,
    title:"John Doe",
    subtitle:"Product designer at Dribble",
    comment:"I enjoy working with the theme and learn so much. you guys make the process fun and interesting. Good luck!"
  },
  

]
const Pricing = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  
    <section className="testimonials container section">
    <h2 className="section_title">
      Cleients $ Reviews
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
    { data.map(({id,image,title,subtitle,comment})=>{
      return(
        <SwiperSlide className="testimonial_item" key={id}>
          <div className="thumb">
            <img src={image} alt="" />
          </div>
          <h3 className="testimonial_title">{title}</h3>
          <span className="subtitle">{subtitle}</span>
          <div className="comment">{comment}</div>
        </SwiperSlide>
      )
    })}
    </Swiper>
  </section>
  )
}

export default Pricing

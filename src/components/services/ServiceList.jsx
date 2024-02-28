import React from 'react'
import { SwiperSlide } from 'swiper/react';

const ServiceList = ({id,image,title,description}) => {
  return (
    <SwiperSlide className='services_card' key={id}>
        <img src={image} alt="" className='service_image' />
        <h1 className='service_title'>{title}</h1>
        <p className='service_description'>{description}</p>
    </SwiperSlide>
  )
}

export default ServiceList

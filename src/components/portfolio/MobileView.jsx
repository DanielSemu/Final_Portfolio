import React from 'react'
import Menu from './Menu'
import './mobileview.css'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const MobileView = () => {
  return (
    <section className="mobileview container section" id='portfolio'>
        <h2 className="section_title">Recent Works</h2>
        <Swiper className="projects_container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        >
        {Menu.map((elem)=>{
            const { id , image, title, category,url} =elem
            return(
            <SwiperSlide className="mwork_card" key={id}>
              <div className="mwork_thumbnaill">
                <img src={image} className='mwork_image' alt="" />
                <div className="mwork_mask"></div>
              </div>
              <span className="mwork_category">{category}</span>
              <h3 className="mwork_title">{title}</h3>
              <a href={url} target='_blank' rel="noreferrer"  className="mwork_button">
              <i className="icon-link work_button_icon"></i>
              </a>
              <br /><br />
            </SwiperSlide>
            )
        })}
        </Swiper>
    </section>
  )
}

export default MobileView

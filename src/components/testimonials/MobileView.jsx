import React from 'react'
import './mobileview.css'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import lang1 from '../../assets/lang1.png';
import lang2 from '../../assets/lang2.png';
import lang3 from '../../assets/lang3.jpg';
import lang4 from '../../assets/lang4.png';
import lang5 from '../../assets/lang5.png';
import lang6 from '../../assets/lang6.png';
import lang7 from '../../assets/tailwind.png';
import lang8 from '../../assets/lang8.png';
import lang9 from '../../assets/lang9.png';
import more from '../../assets/more.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const experience =[
    {
        id:1,
        img:lang5,
        title:"PYTHON",
        style:'shadow-pink-500'
    },
    {
        id:2,
        img:lang4,
        title:"JAVA SCRIPT",
        
        style:'shadow-blue-600'
    },
    {
        id:3,
        img:lang1,
        title:"HTML",
        style:'shadow-orange-500'
    },
    {
        id:4,
        img:lang6,
        title:"REACT",
        style:'shadow-yellow-500'
    },
    {
        id:5,
        img:lang8,
        title:"DJANGO",
        style:'shadow-green-500'
    },
    {
        id:6,
        img:lang2,
        title:"CSS",
        style:'shadow-pink-500'
    },
    {
        id:7,
        img:lang3,
        title:"JAVA",
        style:'shadow-orange-500'
    },
    {
        id:8,
        img:lang7,
        title:"TAILWIND CSS",
        style:'shadow-blue-600'
    },
    {
        id:9,
        img:lang9,
        title:"PHP",
        style:'shadow-yellow-500'
    },
    {
        id:10,
        img:more,
        title:"MORE",
        style:'shadow-green-500'
    },
    
  ];
const MobileView = () => {
  return (
    <section className="Programing section container" id='testimonials'>
    <div className="container_title1">
      <p className='title1'>Programming Languages</p>

    </div>
    <Swiper className="grid_container"
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    grabCursor={true}
    pagination={{ clickable: true }}
    >
      {
        experience.map(({id,img,title,style})=>{
          return(
          <SwiperSlide>
            <div  key={id} className={`card1 ${style}`}>
            <div className="image_container">
              <img src={img} alt="" className="img" />
            </div>
            <div className="title_container">
              <p className="title">{title}</p>

            </div>
            </div>
            <br /><br />
          </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>
  )
}

export default MobileView

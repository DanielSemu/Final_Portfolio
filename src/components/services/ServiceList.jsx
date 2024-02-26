import React from 'react'

const ServiceList = ({id,image,title,description}) => {
  return (
    <div className='services_card' key={id}>
        <img src={image} alt="" className='service_image' />
        <h1 className='service_title'>{title}</h1>
        <p className='service_description'>{description}</p>
    </div>
  )
}

export default ServiceList

import React, { useState } from 'react'
import './portfolio.css'
import Menu from './Menu'
const DesktopView = () => {
const [items ,setItems]= useState(Menu)
  const Everything =()=>{
    setItems(Menu)
  }
  const Static =()=>{
    const art=Menu.filter(item => item.category==="Static")
    setItems(art)
  }
  // const Application =()=>{
  //   const design=Menu.filter(item => item.category==="Application")
  //   setItems(design)
  // }
  // const Design =()=>{
  //   const branding=Menu.filter(item => item.category==="Design")
  //  setItems(branding)
  // }
  const Dynamic =()=>{
    const creative=Menu.filter(item => item.category==="Dynamic")
    setItems(creative)
  }
  return (
    <section className="work container section" id='portfolio'>
      <h1 className="section_title">Recent Works</h1>
      <div className="work_filters">
        <span onClick={()=>Everything()} className="work_item">Everything</span>
        <span onClick={()=>Dynamic()} className="work_item">Dynamic Web</span>
        <span onClick={()=>Static()} className="work_item">Static Web</span>
        {/* <span onClick={()=>Application()} className="work_item">Applications</span>
        <span onClick={()=>Design()} className="work_item">Design</span> */}
      </div>
      <div className="work_container grid">
        {items.map((elem)=>{
          const { id , image, title, category,url} =elem
          return(
            <div className="work_card" key={id}>
              <div className="work_thumbnaill">
                <img src={image} className='work_image' alt="" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={url} target='_blank' rel="noreferrer"  className="work_button">
                <i className="icon-link work_button_icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DesktopView

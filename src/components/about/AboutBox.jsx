import React from 'react'

const AboutBox = () => {
  return (
    <div className='about_boxes grid'>
        <div className="about_box">
            <i className="about_icon icon-fire"></i>
            <div>
                <h3 className="about_title">198</h3>
                <span className="about_subtitle">Project completed</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-cup"></i>
            <div>
                <h3 className="about_titles">5670</h3>
                <span className="about_subtitle">Cup of coffe</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-people"></i>
            <div>
                <h3 className="about_titles">427</h3>
                <span className="about_subtitle">Satisfied Clients</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-badge"></i>
            <div>
                <h3 className="about_titles">35</h3>
                <span className="about_subtitle">Nominees won</span>
            </div>
        </div>
      
    </div>
  )
}

export default AboutBox

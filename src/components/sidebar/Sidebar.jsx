import React from 'react'
import './sidebar.css'
// import Logo from '../../assets/logo.svg'
import Logo1 from '../../assets/D.avif'
const Sidebar = () => {
  return (
    <aside className='aside'>
        <a href="#home" className="nav_logo">
          <img src={Logo1} alt="" />
        </a>
        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#resume" className="nav_link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav_note">
                <a href="#testimonials" className="nav_link">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav_note">
                <a href="#contact" className="nav_link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">
            &copy;2024-2027.</span>
        </div>
    </aside>
  )
}

export default Sidebar

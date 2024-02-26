import React from 'react'

const BlogItem = ({id,blog_category,image,blog_title,date}) => {
  return (
    <div className="blog_card" key={id}>
    <div className="blog_thumb">
      <a href="">
        <span className="blog_category">{blog_category}</span>
      </a>
      <a href=""><img src={image} alt="" className="blog_img" /></a>
    </div>
    <div className="blog_details">
      <h3 className="blog_title">{blog_title}</h3>
      <div className="blog_meta">
        <span>{date}</span>
        <span className="blog_dot">.</span>
        <span>Daniel</span>
      </div>
    </div>
  </div>
  )
}

export default BlogItem

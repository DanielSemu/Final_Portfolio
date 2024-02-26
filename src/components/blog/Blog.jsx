import React from 'react'
import './blog.css'
import Image1 from '../../assets/blog-1.svg'
import Image2 from '../../assets/blog-2.svg'
import Image3 from '../../assets/blog-3.svg'
import BlogItem from './BlogItem'
const data =[
  {
    id:1,
    blog_category:"Reviews",
    image:Image1,
    blog_title:"Common Misconceptions About Payment",
    date:"07 Feburary, 2024",
    name:"Daniel"
  },
  {
    id:2,
    blog_category:"Tutorial",
    image:Image2,
    blog_title:"Best App Development Tool for Your Projects",
    date:"09 Feburary, 2024",
    name:"Daniel"
  },
  {
    id:3,
    blog_category:"Business",
    image:Image3,
    blog_title:"3 Things I know about startup business",
    date:"05 Feburary, 2024",
    name:"Daniel"
  }
]

const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section_title">Latest Posts</h2>
      <div className="blog_container grid">
       
       {
        data.map(({id,blog_category,image,blog_title,date})=>{
          return(
            <BlogItem  key={id} blog_category={blog_category} image={image} blog_title={blog_title}  date={date} />
          )
        })
       }
       
      </div>
    </section>
  )
}

export default Blog

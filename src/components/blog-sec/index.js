import React, { useState, useEffect } from 'react'
import { blogSecData } from '../../utils/commonData'
import './blog-sec.css'

const BlogCards = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    setBlogs(blogSecData)
  }, [])

  return (
    <div className='blogs-wrapper'>
      {blogs.length &&
        blogs.map(
          ({ id, title, small_image, authorname, posted_on, description }) => (
            <div key={id} className='card-wrapper'>
              <img src={small_image} alt={title} />
              <div className='blog-details-wrap'>
                <h3 className='blog-title'>{title}</h3>
                <p className='blog-author'>
                  {authorname}
                  <span className='post-date'>
                   
                    |  {new Date(posted_on).toLocaleDateString('en-IN', {year: 'numeric',
    month: 'short', day: 'numeric'})}
                  </span>
                </p>
                <p className='description'>{description}</p>
              </div>
            </div>
          ),
        )}
    </div>
  )
}

export default BlogCards;

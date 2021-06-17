
import React from 'react';
import BlogCards from '../blog-sec';
import Filters from '../filter-sec';
import  './web-content.css';

export const BlogContent = () => {
  return (
    <div className='content-wrapper'>
      <h3 className='posts-title'>Latest Posts</h3>
      <Filters />
      <BlogCards/>
      
    </div>
  )
}


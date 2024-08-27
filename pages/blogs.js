import React from 'react'
import BlogCard from '@/components/blogCard'

const blogs = () => {
  return (
    <div className='w-screen p-10'>
            <h1 className='text-3xl text-black font-black text-center my-10 '>Latest Blogs</h1>
            <div className='flex flex-wrap gap-5 justify-center justify-items-start'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            </div>

            
    </div>
  )
}

export default blogs
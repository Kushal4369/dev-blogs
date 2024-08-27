import React from 'react'

const BlogCard = () => {
  return (
    <div className='w-[23rem] h-[25rem] border-none shadow-lg shadow-black flex flex-col'>
        <h2 className='text-2xl text-center font-bold p-4'>Blog Title</h2>
        <p className='text-lg h-[65%] text-gray-900 p-3 overflow-hidden'>dadIt is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
            of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop 
            publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncovea
        </p>

        <button className='p-2 w-28 bg-black rounded-xl text-white hover:bg-gray-700 my-auto ml-4'>Read More</button>
    

    </div>
  )
}

export default BlogCard
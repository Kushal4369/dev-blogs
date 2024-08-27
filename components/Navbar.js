import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="">
    <ul className="list-none flex gap-10 text-xl font-bold justify-center py-8 ">
     <Link href={'/'}><li>Home </li></Link> 
     <Link href={'about'}><li> About</li></Link> 
     <Link href={'blogs'}><li> Blogs</li></Link> 
     <Link href={'contact'}><li> Contact</li></Link> 

    </ul>
    
  </nav>
  )
}

export default Navbar
"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import MobileMenu from './MobileMenu';

function Navbar() {
  const [toggle,setToggle] = useState(true)
  return (
    <div className='container mx-auto max-w-6xl px-4 md:px-2'>
        <nav className='Flex py-5'>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={100} height={80}/>
            </div>
            <div className="flex items-center gap-4">
              {/* Dekststop navigation */}
            <ul className='gap-8 ul hidden lg:flex'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Blogs</li>
                <li>Contact Me</li>
            </ul>
            <button className='bg-white p-2 cursor-pointer shadow-md rounded-md text-2xl lg:hidden' onClick={()=> setToggle(!toggle)}><BiMenu /></button>
            </div>
            {/* Mobile navigation */}
            {!toggle && <MobileMenu />}
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'

function MobileMenu() {
  return (
    <ul className={`lg:hidden flex items-center justify-center flex-col gap-4 absolute top-[70px] right-0 w-full h-[100vh] bg-white z-20`}>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Blogs</li>
                <li>Contact Me</li>
            </ul>
  )
}

export default MobileMenu
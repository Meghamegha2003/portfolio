import React, { useState } from 'react'
import { assets } from '../assets/assets'
import ThemeToggle from './ThemeToggle'


export const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between p-4 py-4  lg:px-24 md:px-22 bg-gray-900/70 text-white  font-bold ">
        <div className="flex items-center gap-3 ">
          <img className='w-8 h-8 rounded-full object-center  ' src={assets.logo} alt="Logo" />
        </div>
        <div className='hidden md:flex gap-4'  >
          <a href='#home' >Home</a>
          <a href='#about' >About</a>
          <a href='#project' >Project</a>
          <a href='#contact' >Contact</a>
        </div>

        <div className='flex items-center gap-4'>

          <ThemeToggle />

          <button className="w-6 h-6 md:hidden cursor-pointer" >
            <img src={assets.menu_icon} onClick={() => setOpenMenu(!openMenu)} aria-label="Toggle menu" alt="" />
          </button>
        </div>
      </nav>



      <div>
        <div className={`fixed top-0 right-0 z-50 h-screen w-64
          flex flex-col gap-8 pt-20 pl-8
          bg-gray-900 text-white shadow-xl md:hidden
          transition-transform duration-300 ease-in-out
          ${openMenu ? 'translate-x-0' : 'translate-x-full'}`} >

          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-4 right-5 text-3xl text-white cursor-pointer"
            aria-label="Close menu"
          >
            &times;
          </button>
          
          <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
          <a href="#about" onClick={() => setOpenMenu(false)}>About</a>
          <a href="#project" onClick={() => setOpenMenu(false)}>Project</a>
          <a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a>
        </div>
      </div>
    </>
  )
}

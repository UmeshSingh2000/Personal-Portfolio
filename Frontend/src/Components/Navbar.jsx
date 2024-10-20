import React, { useState } from 'react'
import './navbar.css'
const Navbar = () => {
    const [open,setOpen] =useState(false);
    return (
        <div className='flex absolute w-full items-center justify-between px-12 py-6'>
            {/* hambugerMenu */}
            <div className={`hamburger_menu h-screen ${open? 'open':''} absolute  w-screen left-0 bg-[#272727] text-white z-40`}>
                <div className='flex justify-center items-center h-full'>
                    <ul className='flex flex-col gap-8 font-normal text-center text-2xl'>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className={`${open? 'text-white':''} sm:text-4xl 2xl:text-6xl logo text-3xl cursor-pointer z-50`}>Umesh</div>
            <div className='flex items-center'>
                <ul className='sm:flex sm:items-center sm:text-base 2xl:text-2xl sm:gap-10  hidden'>
                    <li className='cursor-pointer hover:underline'>Blog</li>
                    <li className='cursor-pointer hover:underline'>Contact</li>
                    <li className='cursor-pointer hover:underline'>Projects</li>
                    <li className='cursor-pointer hover:underline'>About</li>
                </ul>
                <i className={`${open? 'text-white':''} fa-solid fa-bars text-4xl sm:hidden z-50`} onClick={()=>setOpen(!open)}></i>
            </div>
        </div>
    )
}

export default Navbar

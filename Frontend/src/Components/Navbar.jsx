import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const handleClick = (rt) => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/${rt}`)
            setLoading(false);
        }, 1200);
    }
    return (
        <div className='w-full'>
            {loading && <Loader />}
            <div className='flex absolute top-0 w-full items-center justify-between px-12 py-6'>
                {/* hambugerMenu */}
                <div className={`hamburger_menu h-screen ${open ? 'open' : ''} absolute  w-screen left-0 bg-[#272727] text-white z-40`}>
                    <div className='flex justify-center items-center h-full'>
                        <ul className='flex flex-col gap-8 font-normal text-center text-2xl'>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className={`${open ? 'text-white' : ''} sm:text-4xl 2xl:text-6xl logo text-3xl cursor-pointer z-50`} onClick={()=>handleClick('')}>Umesh</div>
                <div className='flex items-center'>
                    <ul className='sm:flex sm:items-center sm:text-base 2xl:text-2xl sm:gap-10  hidden'>
                        <li className='cursor-pointer hover:underline'>Blog</li>
                        <li className='cursor-pointer hover:underline'>Contact</li>
                        <li className='cursor-pointer hover:underline'>Projects</li>
                        <li className='cursor-pointer hover:underline' onClick={()=>handleClick('about')}>About</li>
                    </ul>
                    <i className={`${open ? 'text-white' : ''} fa-solid fa-bars text-4xl sm:hidden z-50`} onClick={() => setOpen(!open)}></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'

const Navbar = () => {
    return (
        <div className='flex absolute w-full items-center justify-between px-12 py-6'>
            <div className="sm:text-4xl logo text-3xl cursor-pointer">Umesh</div>
            <div className='flex items-center'>
                <ul className='sm:flex sm:items-center sm:text-base sm:gap-10 hidden'>
                    <li className='cursor-pointer hover:underline'>Blog</li>
                    <li className='cursor-pointer hover:underline'>Contact</li>
                    <li className='cursor-pointer hover:underline'>Projects</li>
                    <li className='cursor-pointer hover:underline'>About</li>
                </ul>
                <i className="fa-solid fa-bars text-4xl sm:hidden"></i>
            </div>
        </div>
    )
}

export default Navbar

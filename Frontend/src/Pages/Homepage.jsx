import React from 'react'
import Navbar from '../Components/Navbar'

const Homepage = () => {
    return (
        <div className='h-svh relative'>
            <Navbar />
            <div className=' h-full font-bold flex flex-col gap-4 justify-center sm:items-center px-12'>
                <h1 className='text-6xl sm:text-8xl lg:text-9xl'>Hi 👋,<br /> I'm <span style={{
                    background: 'linear-gradient(90deg, #9B59B6 0%, #1ABC9C 50.5%, #9A8C6A 100%)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>Umesh!</span></h1>
                <p className='font-light text-2xl tracking-wider sm:text-5xl'>FullStack Developer</p>
                <div className='flex gap-5'>
                    <i className="fa-brands fa-linkedin text-4xl cursor-pointer"></i>
                    <i className="fa-brands fa-github text-4xl cursor-pointer"></i>
                    <i className="fa-regular fa-envelope text-4xl cursor-pointer"></i>
                </div>
            </div>

        </div>

    )
}
export default Homepage

import React from 'react'
import Navbar from '../Components/Navbar'

const Homepage = () => {
    return (
        <div className='h-svh relative'>
            <Navbar />
            <div className='px-12 h-full font-bold flex flex-col gap-4 justify-center sm:items-center'>
                <h1 className='text-6xl mt-2 sm:text-8xl lg:text-[7rem] 2xl:text-[12rem]'>Hi 👋,<br /> I'm <span style={{
                    background: 'linear-gradient(90deg, #9B59B6 0%, #1ABC9C 50.5%, #9A8C6A 100%)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>Umesh!</span></h1>
                <p className='font-light text-2xl tracking-wider sm:text-5xl'>FullStack Developer</p>
                <div className='flex gap-5'>
                    <a href="https://www.linkedin.com/in/umesh-singh-mehta-93819a194/" target='_blank'><i className="fa-brands fa-linkedin text-2xl cursor-pointer"></i></a>
                    <a href="https://github.com/UmeshSingh2000" target='_blank'><i className="fa-brands fa-github text-2xl cursor-pointer"></i></a>
                    <a href="mailto:umeshsighmehta4@gmail.com"><i className="fa-regular fa-envelope text-2xl cursor-pointer"></i></a>
                </div>
            </div>
        </div>

    )
}
export default Homepage

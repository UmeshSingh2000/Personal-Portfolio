import React from 'react'
import Navbar from '../Components/Navbar'
import profile from '../assets/profile.png'
const About = () => {
    return (
        <div className='h-svh relative'>
            <Navbar />
            <div className='h-full px-12 flex flex-col justify-center'>
                <div className='h-32 lg:h-40 xl:h-44 2xl:h-48 flex items-center justify-center'>
                    <img className='h-full' src={profile} alt="" />
                </div>
                <h1 className='font-bold text-2xl'>About Me!</h1>
                <p className='font-normal text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-2xl'>Hi, I'm Umesh, a passionate FullStack Developer with a strong foundation in web technologies. With a keen interest in coding and problem-solving, I specialize in creating intuitive, responsive, and dynamic websites. I have experience working with the <span className='about_span bg-orange-500 text-white px-2'>MERN</span>  stack (MongoDB, Express, React, Node.js), and I am constantly exploring new tools and technologies to enhance my skill set.I believe in writing clean, maintainable code and strive to deliver seamless user experiences. My goal is to blend creativity with functionality, ensuring that every project I work on adds value and solves real-world problems.When I'm not coding, you'll likely find me experimenting with new development trends, learning from the community, or working on personal projects that challenge my skills.</p>
            </div>
        </div>
    )
}

export default About

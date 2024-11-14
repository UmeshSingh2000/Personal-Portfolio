import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import img1Desktop from '../assets/screely-1730468346935.png'; // Ecommerce Desktop
import img1Mobile from '../assets/iPhone-14-Pro-Max-473x968 1.png'; // Ecommerce Mobile
import img2Desktop from '../assets/screely-1730639473001.png'; // Project 2 Desktop
import img2Mobile from '../assets/iPhone-14-Pro-Max-473x968 2.png'; // Project 2 Mobile
import img3Desktop from '../assets/user-auth.png' // Project 3 Desktop
import img3Mobile from '../assets/iPhone-14-Pro-Max-473x968.png' //Project 3 Desktop
import img4Desktop from '../assets/email.png' //project 4 Desktop
import img4Mobile from '../assets/iPhone-14-Pro-Max-473x968 emial.png' //project 4 Mobile
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
    const [mobileToggle, setMobileToggle] = useState(window.innerWidth <= 640);
    const [currentProject, setCurrentProject] = useState(0); // Track the active project

    useEffect(() => {
        const handleResize = () => {
            setMobileToggle(window.innerWidth <= 640);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const projects = [
        {
            imgDesktop: img1Desktop,
            imgMobile: img1Mobile,
            link: 'https://ecommerce-seven-ruby-85.vercel.app/',
            title: 'Ecommerce Shopping App',
            desc: 'Ecommerce Web application using Reactjs and Redux',
        },
        {
            imgDesktop: img2Desktop,
            imgMobile: img2Mobile,
            link: 'https://youtube-self-three.vercel.app/',
            title: 'Youtube Frontend Clone',
            desc:"YouTube clone using React and Redux, featuring a responsive UI that closely mimics YouTube's interface",
        },
        {
            imgDesktop: img3Desktop,
            imgMobile: img3Mobile,
            link: 'https://user-auth-frontend-wosf.onrender.com/',
            title: 'User Authentication With MERN',
            desc: "A robust user authentication system built with the MERN stack, featuring secure login, registration, and user session management with responsive design."
        },
        {
            imgDesktop: img4Desktop,
            imgMobile: img4Mobile,
            link: 'https://email-client-mock-app.vercel.app/',
            title: 'Gmail Interface With Api',
            desc: "A mock Gmail interface built with React, integrating APIs to simulate email client functionalities like inbox management, message viewing, and responsive design."
        }
    ];

    const handleNext = () => {
        setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentProject((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full overflow-hidden">
                <div
                    className="flex mt-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentProject * 100}%)` }}
                >
                    {projects.map((project, index) => (
                        <div className="w-full flex-shrink-0" key={index}>
                            <ProjectCard
                                img={mobileToggle ? project.imgMobile : project.imgDesktop}
                                link={project.link}
                                title={project.title}
                                desc={project.desc}
                                mob={mobileToggle}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex mt-4 space-x-4">
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                    >
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;

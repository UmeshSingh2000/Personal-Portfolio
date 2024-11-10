import React from 'react'

const ProjectCard = ({ img, link, title, desc, mob }) => {
    return (
        <>
            <div className='w-full flex justify-center flex-col items-center gap-1'>
                <div className={`image ${mob ? 'h-96' : 'sm:w-[500px] md:w-[700px] lg:w-3/5'}`}>
                    <a href={link} target='_blank'><img src={img} alt="" className='w-full h-full rounded-md' /></a>
                </div>
                <div className="title">
                    <h1 className='font-semibold text-xl'>{title}</h1>
                </div>
                <div className="description w-96 h-auto lg:w-auto">
                    <p className='font-medium text-center'>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard

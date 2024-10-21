import React from 'react'
import './loader.css'
const Loader = () => {
    return (
        <div className='z-[500] absolute w-screen h-screen' style={{ background: 'linear-gradient(180deg, #F5F5F5 0%, #E0E0E0 100%)', }}>
            <div className="loading">
                <span>Loading</span>
            </div>
        </div>
    )
}

export default Loader

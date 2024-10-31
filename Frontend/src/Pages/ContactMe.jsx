import React from 'react'
import Navbar from '../Components/Navbar'
import InputField from '../Components/InputField'
import Btn from '../Components/Btn'


const ContactMe = () => {
    return (
        <div className='h-svh relative'>
            <Navbar />
            <div className='h-full gap-5 flex-col flex justify-center items-center'>
                <h1 className='text-2xl'>Contact Me</h1>
                <InputField placeholder = 'Email...'/>
                <InputField placeholder = 'Message...'/>
                <Btn text='Send'/>
            </div>
        </div>
    )
}

export default ContactMe

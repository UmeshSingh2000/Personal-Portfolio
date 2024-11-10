import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import InputField from '../Components/InputField'
import Btn from '../Components/Btn'


const ContactMe = () => {
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    return (
        <div className='h-svh relative'>
            <Navbar />
            <div className='h-full gap-5 flex-col flex justify-center items-center'>
                <h1 className='text-2xl'>Contact Me</h1>
                <InputField placeholder = 'Email...' value = {email} func={setEmail}/>
                <InputField placeholder = 'Message...' value={message} func={setMessage}/>
                <Btn text='Send' email={email} message={message} setEmail={setEmail} setMessage={setMessage}/>
            </div>
        </div>
    )
}

export default ContactMe

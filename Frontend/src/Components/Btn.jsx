import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Loading from './Loading'
const Btn = ({ text, email, message,setMessage,setEmail }) => {
  const [loader, setLoader] = useState(false)
  const [serverMessage, setServerMessage] = useState('')
  const [messageState, setMessageState] = useState(false)
  const handleSend = async () => {
    setMessageState(false);
    if (!email || !message) {
      setMessageState(true);
      setServerMessage('All fields Required');
      setTimeout(() => {
        setMessageState(false);
      }, 3000);
      return
    }
    setLoader(true);
    try {
      const res = await axios.post('https://personal-portfolio-rur8.onrender.com/api/send_email', {
        email, message
      })
      setServerMessage(res.data.message);
      setMessageState(true);
    }
    catch (err) {
      setServerMessage(err.message)
    }
    finally {
      setLoader(false);
      setTimeout(() => {
        setMessageState(false);
      }, 3000);
      setEmail('');
      setMessage('')
    }
  }
  if (loader) return <Loading />
  if (messageState) return <p className='text-center text-red-600'>{serverMessage}</p>
  return (
    <div>
      <Button style={btnStyle} variant="contained" onClick={handleSend}>{text}</Button>
    </div>
  )
}
const btnStyle = {
  backgroundColor: '#353535',
  borderRadius: '50px',
  padding: '10px 40px'
}
export default Btn

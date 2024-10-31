import React from 'react'
import Button from '@mui/material/Button';
const Btn = ({text}) => {
  return (
    <div>
      <Button style={btnStyle} variant="contained">{text}</Button>
    </div>
  )
}
const btnStyle = {
    backgroundColor: '#353535',
    borderRadius : '50px',
    padding:'10px 40px'
}
export default Btn

import React from 'react'
import TextField from '@mui/material/TextField';

const InputField = ({placeholder,value,func}) => {
    return (
        <div className='w-screen px-12 flex justify-center'>
            <TextField className='w-96' id="standard-basic" label={placeholder} variant="standard" value={value} onChange={(e)=>func(e.target.value)}/>
        </div>
    )
}

export default InputField

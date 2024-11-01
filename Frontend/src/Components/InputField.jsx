import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputField = ({placeholder}) => {
    return (
        <div className='w-screen px-12 flex justify-center'>
            <TextField className='w-96' id="standard-basic" label={placeholder} variant="standard" />
        </div>
    )
}

export default InputField

const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000
const sendEmailRoute = require('./Routes/sendMailRoute')
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.json({message:"Welcome to server"})
})

app.use('/api',sendEmailRoute);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
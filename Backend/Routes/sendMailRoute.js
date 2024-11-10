const express = require('express')
const router = express.Router()
const {sendEmail} = require('../Controllers/emailControlller')

router.post('/send_email',sendEmail)

module.exports = router
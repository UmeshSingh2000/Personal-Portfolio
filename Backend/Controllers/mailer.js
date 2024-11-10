const nodemailer = require('nodemailer')

require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASS
    }
})
const sendEmailController = async (userEmail,message) => {

    const subject = 'New Contact Request from Portfolio';
    const text = `From: ${userEmail}\n\nMessage:\n${message}`;
    const mailOption = {
        from: process.env.USER_EMAIL,
        to :process.env.USER_EMAIL,
        subject,
        text
    };
    try {
        const info = await transporter.sendMail(mailOption)
        console.log('Email sent: ' + info.response);
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
module.exports = sendEmailController;
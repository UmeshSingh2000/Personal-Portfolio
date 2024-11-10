const sendEmailController = require('./mailer');

const sendEmail = async (req, res) => {
    try {
        const { email,message } = req.body;
        
        // Validate the email field
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }
        
        // Send the email
        await sendEmailController(email,message);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
};

module.exports = { sendEmail };

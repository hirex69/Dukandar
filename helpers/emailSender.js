// emailSender.js

const nodemailer = require('nodemailer');

// Function to send email
const sendEmail = (to, subject, text) => {
    return new Promise((resolve, reject) => {
  // Create a transporter using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'parasusawant6919@gmail.com',
      pass: 'gsvp cpai nldv zixs'
    }
  });

  const mailOptions = {
    from: 'parasusawant6919@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      reject(error); // Reject the promise with the error
    } else {
      console.log('Email sent:', info.response);
      resolve(info.response); // Resolve the promise with the response
    }
  });
});
};

module.exports = {
  sendEmail
};

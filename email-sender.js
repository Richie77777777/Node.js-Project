const nodemailer = require('nodemailer');

// Create a transporter object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'richeanyadike7@gmail.com', // Your email address
    pass: 'SjmxL6uFsd'    // Your email password or app password
  }
});

// Set up email data
let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Hello Node!',
  text: 'This is a test email sent using Node.js and Nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});

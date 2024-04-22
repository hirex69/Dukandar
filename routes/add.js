// emailRoute.js

const express = require('express');
const router = express.Router();
const { sendEmail } = require('../helpers/emailsender');

router.use(express.json());

router.post('/address', async (req, res) => {
  const { name, email, item,  address, pincode } = req.body;

  // Validate if message exists
  if (!item) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const to = 'parasusawant6919@gmail.com'; // Replace with the recipient's email address
  const subject = 'New Order';
  const defaultMessage = 'Hello Seller There is a new order for you from !'; // Default message

  const text = `${defaultMessage}\n\nName: ${name}\nEmail: ${email}\nItem: ${item}\nAddress: ${address}\nPincode: ${pincode}`;

  try {
    // Call the sendEmail function
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});
module.exports = router;

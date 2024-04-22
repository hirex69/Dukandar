import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const Address = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-email', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <Grid container spacing={2}>
    <Grid item xs={6}>
      {/* Content for the first half of the div */}
      <div>
        {/* Content for the first half */}
        First Half
      </div>
    </Grid>
    <Grid item xs={6}>
      {/* Content for the second half of the div */}
      <div>
        {/* Content for the second half */}
        Second Half
      </div>
    </Grid>
  </Grid>
  );
};

export default Address;

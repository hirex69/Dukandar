// Cs.js

import React, { useEffect, useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    div,
  } from "@material-tailwind/react";
import { getCart } from './cartHelpers'; // Import the getCart function
import axios from 'axios';

const Cs = () => {
    const [cartItems, setCartItems] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        item: '',
        address: '',
        Pincode: ''
    
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/api/address', formData);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '',item:'',  address: '', pincode: '' });
        } catch (error) {
          console.error('Error sending message:', error);
          alert('Failed to send message. Please try again later.');
        }
      };

  // Function to fetch cart items
  const fetchCartItems = async () => {
    const items = await getCart(); // Call getCart function to fetch cart items
    setCartItems(items); // Set cart items in state
  };

  // Fetch cart items when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  // Function to handle refresh button click
  const handleRefresh = () => {
    fetchCartItems(); // Fetch cart items again
  };

  return (
    <div>
            <div>

      <h2>Cart Items</h2>
      <button onClick={handleRefresh}>Refresh</button> {/* Refresh button */}
  
    </div>
    <form onSubmit={handleSubmit}>

    <div className="bg-white shadow-md rounded-lg p-6">
  <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
  <div className="flex flex-col gap-4">
    <div className="flex gap-2 items-center">
      <div className="w-20">Name:</div>
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
    </div>
    <div className="flex gap-2 items-center">
      <div className="w-20">Email:</div>
      <input
        type="email"
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>Product & Quantity</div>

    <div 
     value={formData.item}
     onChange={handleChange}
    className="border border-gray-300 rounded-lg py-3 px-3 focus:outline-none focus:border-blue-400">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.count}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-2 items-center">
      <div className="w-20">Address:</div>
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
        placeholder="Address Line 1"
        value={formData.address}
        onChange={handleChange}
      />      <div className="w-20">Pin code:</div>

         <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
    </div>
  </div>
  <button
  type='submit'
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-6"
  >
    Submit
  </button>
</div>
</form>
    </div>

  );
};

export default Cs;

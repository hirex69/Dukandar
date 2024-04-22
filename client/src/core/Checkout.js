// // import React, { useState, useEffect } from 'react';
// // import Button from '@material-ui/core/Button';
// // import {
// //   getProducts,
// //   getBraintreeClientToken,
// //   processPayment,
// //   createOrder,
// // } from './apiCore';
// // import { emptyCart } from './cartHelpers';
// // import Card from './Card';
// // import { isAuthenticated } from '../auth';
// // import { Link } from 'react-router-dom';
// // import DropIn from 'braintree-web-drop-in-react';

// // const Checkout = ({ products, setRun = (f) => f, run = undefined }) => {
// //   const [data, setData] = useState({
// //     loading: false,
// //     success: false,
// //     clientToken: null,
// //     error: '',
// //     instance: {},
// //     address: '',
// //   });

// //   const userId = isAuthenticated() && isAuthenticated().user._id;
// //   const token = isAuthenticated() && isAuthenticated().token;

// //   const getToken = (userId, token) => {
// //     getBraintreeClientToken(userId, token).then((data) => {
// //       if (data.error) {
// //         console.log(data.error);
// //         setData({ ...data, error: data.error });
// //       } else {
// //         console.log(data);
// //         setData({ clientToken: data.clientToken });
// //       }
// //     });
// //   };

// //   useEffect(() => {
// //     getToken(userId, token);
// //   }, []);

// //   const handleAddress = (event) => {
// //     setData({ ...data, address: event.target.value });
// //   };

// //   const getTotal = () => {
// //     return products.reduce((currentValue, nextValue) => {
// //       return currentValue + nextValue.count * nextValue.price;
// //     }, 0);
// //   };

// //   const showCheckout = () => {
// //     return isAuthenticated() ? (
// //       <div>{showDropIn()}</div>
// //     ) : (
// //       <Link to='/signin'>
// //         <Button variant='contained' color='primary'>
// //           Sign in to checkout
// //         </Button>
// //       </Link>
// //     );
// //   };

// //   let deliveryAddress = data.address;

// //   const buy = () => {
// //     setData({ loading: true });
// //     // send the nonce to your server
// //     // nonce = data.instance.requestPaymentMethod()
// //     let nonce;
// //     let getNonce = data.instance
// //       .requestPaymentMethod()
// //       .then((data) => {
// //         // console.log(data);
// //         nonce = data.nonce;
// //         // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
// //         // and also total to be charged
// //         // console.log(
// //         //     "send nonce and total to process: ",
// //         //     nonce,
// //         //     getTotal(products)
// //         // );
// //         const paymentData = {
// //           paymentMethodNonce: nonce,
// //           amount: getTotal(products),
// //         };

// //         processPayment(userId, token, paymentData)
// //           .then((response) => {
// //             console.log(response);
// //             // empty cart
// //             // create order

// //             const createOrderData = {
// //               products: products,
// //               transaction_id: response.transaction.id,
// //               amount: response.transaction.amount,
// //               address: deliveryAddress,
// //             };

// //             createOrder(userId, token, createOrderData)
// //               .then((response) => {
// //                 emptyCart(() => {
// //                   setRun(!run); // run useEffect in parent Cart
// //                   console.log('payment success and empty cart');
// //                   setData({
// //                     loading: false,
// //                     success: true,
// //                   });
// //                 });
// //               })
// //               .catch((error) => {
// //                 console.log(error);
// //                 setData({ loading: false });
// //               });
// //           })
// //           .catch((error) => {
// //             console.log(error);
// //             setData({ loading: false });
// //           });
// //       })
// //       .catch((error) => {
// //         // console.log("dropin error: ", error);
// //         setData({ ...data, error: error.message });
// //       });
// //   };

// //   const showDropIn = () => (
// //     <div onBlur={() => setData({ ...data, error: '' })}>
// //       {data.clientToken !== null && products.length > 0 ? (
// //         <div>
// //           <div className='gorm-group mb-3'>
// //             <label className='text-muted'>Delivery address:</label>
// //             <textarea
// //               onChange={handleAddress}
// //               className='form-control'
// //               value={data.address}
// //               placeholder='Type your delivery address here...'
// //             />
// //           </div>

// //           <DropIn
// //             options={{
// //               authorization: data.clientToken,
// //               paypal: {
// //                 flow: 'vault',
// //               },
// //             }}
// //             onInstance={(instance) => (data.instance = instance)}
// //           />
// //           <button onClick={buy} className='btn btn-success btn-block'>
// //             Pay
// //           </button>
// //         </div>
// //       ) : null}
// //     </div>
// //   );

// //   const showError = (error) => (
// //     <div
// //       className='alert alert-danger'
// //       style={{ display: error ? '' : 'none' }}
// //     >
// //       {error}
// //     </div>
// //   );

// //   const showSuccess = (success) => (
// //     <div
// //       className='alert alert-info'
// //       style={{ display: success ? '' : 'none' }}
// //     >
// //       Thanks! Your payment was successful!
// //     </div>
// //   );

// //   const showLoading = (loading) =>
// //     loading && <h2 className='text-danger'>Loading...</h2>;

// //   return (
// //     <div>
// //       <h2>Total: ${getTotal()}</h2>
// //       {showLoading(data.loading)}
// //       {showSuccess(data.success)}
// //       {showError(data.error)}
// //       {showCheckout()}
// //     </div>
// //   );
// // };

// // export default Checkout;
// import React, { useState } from 'react';
// import Cs from './Cs';
// import axios from 'axios';

// const Checkout = () => {
  

//   return (
//     <form onSubmit={handleSubmit}>
//        <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Your Name"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Your Email"
//         required
//       />
//   <Cs/>
//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Your Message"
//         required
//       />
//       <button type="submit">Send Message</button>
//     </form>
//   );
// };

// export default Checkout;

// Cs.js

import React, { useEffect, useState } from 'react';
import Address from './Address';
import { Button, CircularProgress, Grid } from '@material-ui/core';

import { getCart } from './cartHelpers'; // Import the getCart function
import axios from 'axios';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false); // State to manage loading state of the refresh button

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        item: '',
        address: '',
        pincode: ''
    
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

    <form onSubmit={handleSubmit}>

    <div class="bg-white shadow-md rounded-lg  p-6">
  <h2 class="text-xl font-semibold mb-4 mt-4 ml-4">Delivery Information </h2>
  <div class="ml-4">
    <div class="ml-10">
 
            </div>
             <Grid container spacing={2}>
  <Grid item xs={6}>

  <div class="flex flex-col gap-4">
      <div class="flex items-center">
        <div class="w-20">Name:</div>
        <input
          type="text"
          name="name"
          class="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400 flex-1"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
    </div>
    </Grid>
    <Grid item xs={6}>
    <div class="w-1/2 mb-2"> {/* Half width for Email */}
      <div class="flex items-center">
        <div class="w-20">Email:</div>
        <input
          type="email"
          name="email"
          class="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400 flex-1"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

</div>
</Grid>
  </Grid>
    <div>Product & Quantity</div>

    <select
  name="item"
  value={formData.item}
  onChange={handleChange}
  className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
>
  <option value="">Select Product</option>
  {cartItems.map((item, index) => (
    <option key={index} value={`${item.name} - Quantity: ${item.count}`}>
      {item.name} - Quantity: {item.count}
    </option>
  ))}
</select>

    <div class="flex gap-2 items-center">
        <Grid container spacing={2}>
            <Grid item xs={6}>
       <div class="w-20">Address:</div>
       <input
        type="text"
        name="address"

        class="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      ></input>  
        </Grid>
    <Grid item xs={6}>
      <div>
       <div class="w-20">Pin code:</div>

         <input
        type="pincode"
        name="pincode"

        class="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
    </div>
  </Grid>
  </Grid>

  </div>

 
  <div className='mt-4'>
  <Button type='submit'
   variant='contained' color='primary'
>  Submit</Button>
</div>
</div>
</div>

</form>
    </div>

  );
};

export default Checkout;

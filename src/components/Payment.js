import React, { useState } from 'react';
import Navbar from './Navbar';

function Payment() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      setMessage("Please enter an amount.");
    } else {
      const numericAmount = parseFloat(amount);
      if (numericAmount < 100000) {
        var options = {
          key: "rzp_test_ihlc3tnPkb6Riz",
          key_secret: "KJyTIXfijzWUXnfeZt12CSm0",
          amount: numericAmount * 100000,
          currency: "INR",
          name: "SDP_PROJECTS",
          description: "for testing purpose",
          handler: function (response) {
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name: "Vijayalakshmi",
            email: "vaishnavi@gmail.com",
            contact: "9123456789"
          },
          notes: {
            address: "Razorpay Corporate office"
          },
          theme: {
            color: "#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      } else {
        setMessage("Amount exceeded 100000.");
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div className="App">
        <h2>Razorpay Payment Integration Using React</h2>
        <br />
        <input
          type="text"
          placeholder='Enter Amount'
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setMessage(''); // Clear the message when the amount input changes
          }}
        />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Payment;

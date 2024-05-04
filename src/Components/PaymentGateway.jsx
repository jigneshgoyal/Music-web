
import React, { useState } from 'react';
import mastercardLogo from '../image/mastercard.jpg';
import express from '../image/express.jpg';


const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const expiryYears = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  const handlePayment = () => {
    console.log('Payment processing...');
  };

  return (
    <div className="bg-grey">
      <div className="max-w-xl mx-auto mt-10 p-6 bg-grey rounded-md shadow-lg flex flex-wrap">
        <div className="w-full p-2">
        <h2 className="text-2xl font-bold text-black mb-2 flex items center justify-center">Payment Method</h2>
          <h2 className="text-xl font-sans text-black mb-2">Accepted Cards</h2>
          <h2 className="text-xl font-semibold text-black mb-4 flex items-center">
            <span className="text-blue-500 mr-2">Visa</span>
            <img src={mastercardLogo} alt="Mastercard" className="h-6 w-auto" />
            <img src={express} alt="american" className="h-6 w-auto" />
          </h2>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-black-300 mb-1">Card Number:</label>
            <input
              type="number"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              required
              className="w-full px-3 py-2 border border-gray-700 bg-black-200 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 pr-2 mb-2 md:mb-0">
              <label htmlFor="expiryMonth" className="block text-black-300 mb-1">Expiry Month:</label>
              <select
                id="expiryMonth"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                required
                className="w-full px-3 py-2 border border-black-700 bg-black-200 rounded-md focus:outline-none focus:border-blue-400"
              >
                <option value="">Select Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 pl-2">
              <label htmlFor="expiryYear" className="block text-black-300 mb-1">Expiry Year:</label>
              <select
                id="expiryYear"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-700 bg-black-200 rounded-md focus:outline-none focus:border-blue-400"
              >
                <option value="">Select Year</option>
                {expiryYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-black-300 mb-1">CVV:</label>
            <input
              type="number"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              required
              className="w-full px-3 py-2 border border-gray-700 bg-black-200 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black-300 mb-1">Name on Card:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name on card"
              required
              className="w-full px-3 py-2 border border-gray-700 bg-black-200 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <button type="submit" onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;

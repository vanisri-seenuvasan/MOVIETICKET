// src/components/GPayTransactionPage.js
import React, { useState, useEffect } from 'react';
import './PaymentMethods.css';
import { Link } from 'react-router-dom';
const PaymentMethod = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [timerValue, setTimerValue] = useState(5);
  const [timerStarted, setTimerStarted] = useState(false);
  const handleMobileNumberChange = (event) => {
    const enteredMobileNumber = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setMobileNumber(enteredMobileNumber);
  };

  const handleAgreementChange = () => {
    setAgreementChecked(!agreementChecked);
  };

  

  const handleButtonClick = () => {
  if (!timerStarted) {
    setTimerStarted(true);

    // Set a countdown interval
    const intervalId = setInterval(() => {
      setTimerValue((prevValue) => {
        // If the timer reaches 0, hide the timer, clear the interval, and reset the timerStarted state
        if (prevValue === 1) {
          setShowTimer(false);
          clearInterval(intervalId);
          setTimerStarted(false);
        }
        return prevValue - 1;
      });
    }, 1000);

    // Initialize the timer value immediately (not waiting for the first second)
    setTimerValue((prevValue) => prevValue - 1);
  }
};
  const handleConfirmPayment = () => {
    if (mobileNumber.length === 10 && agreementChecked) {
      handleButtonClick(); // Start the timer
    }
  };


  useEffect(() => {
    // Cleanup the timer interval when the component unmounts
    return () => {
      setShowTimer(false);
      setTimerValue(5);
    };
  });

  return (
    <div className="gpay-transaction-page">
      <h1> TRANSACTION PAGE</h1>

      <div className="input-container">
        <label>Enter Mobile Number:</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          placeholder="Enter mobile number"
        />
        {mobileNumber.length !== 10 && <span className="error-message">Mobile number must be 10 digits</span>}
      </div>

      <div className="agreement-container">
        <input
          type="checkbox"
          id="agreementCheckbox"
          checked={agreementChecked}
          onChange={handleAgreementChange}
        />
        <label htmlFor="agreementCheckbox">I agree to the terms and conditions</label>
      </div>

      <button  className="button" onClick={handleButtonClick} disabled={mobileNumber.length !== 10 || !agreementChecked}>
        <Link to="/time">

        Confirm Payment
        </Link>
      </button>
      {showTimer && <div className="timer">Timer: {timerValue} seconds</div>}
      
    </div>
  );
};

export default PaymentMethod;

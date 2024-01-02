import React, { useState } from 'react';
import './Timer.css';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';
const Timer = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNextButtonClick = () => {
    setShowConfirmation(true);
  };

  return (
    <div>
        <Link to="/time"></Link>
      {showConfirmation ? (
        <div>
          <h1>Thank you. Your ticket is confirmed.</h1>
        </div>
      ) : (
        <div>
          <Countdown/>
          {/* Add your ticket details here */}
          <button onClick={handleNextButtonClick}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Timer;

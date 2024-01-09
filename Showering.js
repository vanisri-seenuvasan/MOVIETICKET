import React from 'react';
import './Showering.css';
import { Link } from 'react-router-dom';

const Firework = () => (
  <div className="firework">
    <Link to="/fire"></Link>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const Showering = () => (
  <div className="app-container">
    <div className="top-right">
      <Link to="/logout">Logout</Link>
    </div>
    <Firework />
    <Firework />
    <Firework />
    <div className="confirmation-message">
      <p>
        THANK YOU!! YOUR TICKET IS CONFIRMED
      </p>
    </div>
  </div>
);

export default Showering;

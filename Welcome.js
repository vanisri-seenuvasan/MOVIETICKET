// Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const backgroundImageUrl = 'https://thumbs.dreamstime.com/b/cinema-background-film-reel-popcorn-drink-tickets-vector-85106601.jpg';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    width:'2300px',
  };

  return (
    <div className="welcome-container" style={containerStyle}>
      <div className="content">
      <div className="book-your-show">BOOK YOUR SHOW</div>
        <div className="login-button-container">
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
 const Welcome = () => {
  return (
    <Link to="/movies" className="brand-text">BOOKMYSHOW</Link>
  )
}
export default Welcome;

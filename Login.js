import React, { useState } from 'react';
import './Login.css'; // Import your stylesheet
import { Link } from 'react-router-dom';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Log in');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setMessage('Authenticating');

    setTimeout(() => {
      setMessage('Welcome back!');
      setTimeout(() => {
        setMessage('Log in');
        setLoading(false);
      }, 4000);
    }, 3000);
  };

  return (
    <div className={`login ${loading ? 'loading' : ''} ${message === 'Welcome back!' ? 'ok' : ''}`}>
        <Link to="/login"></Link>
      <form onSubmit={handleSubmit}>
        <p className="title" style={{fontSize:'50px'}}><center>LOGIN PAGE</center></p>
        <input type="text" placeholder="Username" autoFocus  style={{fontSize:'30px'}}/>
        <i className="fa fa-user"></i>
        <input type="password" placeholder="Password" style={{fontSize:'30px'}} />
        <i className="fa fa-key"></i>
        <a href="#" style={{fontSize:'25px'}}>Forgot your password?</a>
        <button type="submit">
          <i className="spinner"></i>
          <span className="state">{message}</span>
        </button>
      </form>
      <footer><a target="_blank" href="http://boudra.me/">boudra.me</a></footer>
    </div>
  );
};

export default Login;

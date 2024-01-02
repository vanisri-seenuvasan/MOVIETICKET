// src/components/FooterIcons.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FooterIcons.css';

const FooterIcons = () => {
  const iconUrls = [
    'https://tse1.mm.bing.net/th?id=OIP.P39ZiX6Wewbw_8SUI3EFngHaHa&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.fjd4EV7z9o-Oqc8o1VZeTgHaIg&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.O_Cucfl9789HqjH6KMSNJwHaHa&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.lDrTXJFcFI89ozyh4dGYhwHaDX&pid=Api&P=0&h=180',
    'https://tse4.explicit.bing.net/th?id=OIP.XSJZQbhXaqy9FmxkVYf-uQHaCi&pid=Api&P=0&h=180',
  ];

  return (
    <div className="footer-icons">
      {iconUrls.map((url, index) => (
        <Link key={index} to="/gpay">
          <img src={url} alt={`icon-${index}`} />
        </Link>
      ))}
    </div>
  );
};

export default FooterIcons;

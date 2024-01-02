// src/components/ImageIcons.js
import React from 'react';
import './movie1.css';
import { Link } from 'react-router-dom';

const imageUrls = [
  'https://tse4.mm.bing.net/th?id=OIP.ShdPdYxcJ1sP7Mkq1zXtBAHaIl&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.cTxnpWO_m3ktWXX-IXcQfwHaKJ&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.sx8RwxsOxJOlURQHIo85sgHaH2&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.TXTc_U0lvw7TNMpUcq0H0AHaJQ&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.rfH0Qj4hzrs3o8Q4ETg7owAAAA&pid=Api&P=0&h=180',
  'https://tse4.mm.bing.net/th?id=OIP.yBZh-SMBPMVC2NJfw9UDiAHaJQ&pid=Api&P=0&h=180',
  'https://upload.wikimedia.org/wikipedia/commons/c/ca/Chandini_Chowdary.png',
  'https://i.ytimg.com/vi/SBfSAbAZhgQ/hqdefault.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYMiBdKHIwDw==&rs=AOn4CLAdwHJF2Z0zcEbdmE2KXCyvKxXc0g',
];

const ImageIcon = ({ imageUrl }) => (
  <div className="icon-container">
    <Link to="/movie1">
      <img src={imageUrl} alt="icon" className="round-icon" />
    </Link>
  </div>
);

const Movie1 = () => {
  return (
    <div>
      <h1 className="h1">CAST AND CREW OF SABA NAYAGAN</h1>
      <div className="image-icons-page">
        {imageUrls.map((url, index) => (
          <ImageIcon key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default Movie1;

// src/components/ImageIcons.js
import React from 'react';
import './movie1.css';
import { Link } from 'react-router-dom';

const imageUrls = [
  'https://starsunfolded.com/wp-content/uploads/2015/07/Prabhas1.jpg',
  'http://starsunfolded.com/wp-content/uploads/2014/08/Shruti-Haasan.jpg',
  'https://starsunfolded.com/wp-content/uploads/2016/11/Prithviraj-Sukumaran.jpg',
  'https://starsunfolded.com/wp-content/uploads/2018/06/Jagapati-Babu.jpg',
  'https://starsunfolded.com/wp-content/uploads/2018/04/Tinnu-Anand-768x576.jpg',
  'https://starsunfolded.com/wp-content/uploads/2019/12/Anchor-Jhansi.jpg',
  'https://tse4.mm.bing.net/th?id=OIP.kx9f0tcq_16zCBHAzhP3xAHaGe&pid=Api&P=0&h=180',
  'https://tse3.mm.bing.net/th?id=OIP.Rz8k1rpxoEzSL16IJxealgHaHa&pid=Api&P=0&h=180',
];

const ImageIcon = ({ imageUrl }) => (
  <div className="icon-container">
    <Link to="/movie2">
      <img src={imageUrl} alt="icon" className="round-icon" />
    </Link>
  </div>
);

const Movie2 = () => {
  return (
    <div>
      <h1>CAST AND CREW OF SALAAR</h1>
      <div className="image-icons-page">
        {imageUrls.map((url, index) => (
          <ImageIcon key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default Movie2;

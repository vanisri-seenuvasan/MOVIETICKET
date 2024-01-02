import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieBooking.css'; // Make sure to have a corresponding CSS file

const MovieBookingPage = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handlePriceRangeClick = (priceRange) => {
    setSelectedPriceRange((prevSelectedPriceRange) =>
      prevSelectedPriceRange === priceRange ? null : priceRange
    );
  };

  return (
    <div className="movie-booking-page">
      {/* First set of movie details */}
      <div className="movie-details">
        <h1>BOOK MOVIES</h1>
        <p>TAMIL.2D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-100' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-100')}
          >
            <p>₹0 to ₹100</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '101-200' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('101-200')}
          >
            <p>₹101 to ₹200</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>KA Cinemas A/C: Vikravandi</h2>
          <p>Cancellation Available</p>

          <div className="timings">
            <button>
              <Link to="/seat">
              11:00 AM
              </Link>
              </button>
            <button>06:00 PM</button>
          </div>
        </div>
      </div>

      {/* Second set of movie details */}
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
      <div className="movie-details">
        <h1>ANOTHER MOVIE</h1>
        <p>ENGLISH.3D</p>

        <div className="price-ranges">
          <div
            className={`price-range ${selectedPriceRange === '0-150' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('0-150')}
          >
            <p>₹0 to ₹150</p>
          </div>
          <div
            className={`price-range ${selectedPriceRange === '151-300' ? 'selected' : ''}`}
            onClick={() => handlePriceRangeClick('151-300')}
          >
            <p>₹151 to ₹300</p>
          </div>
        </div>

        <div className="cinema-card">
          <h2>XYZ Cinemas A/C: City Center</h2>
          <p>No Cancellation Available</p>

          <div className="timings">
            <button>02:30 PM</button>
            <button>08:00 PM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBookingPage;

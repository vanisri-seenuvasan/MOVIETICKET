import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileList from './ProfileList';

const MoviesPage = () => {
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };
  const initialMovies = [
    'Salar',
    'Kedi Billa Killadi Ranga',
    'Hi Naana',
    'My Dear Boodham',
    'Chittha',
    'Dear Comrade',
    'Kabali',
    'Varisu',
    'KGF',
    'Annaporani',
    'Animal',
  ];

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
    navigate('/search');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredMovies = initialMovies.filter((movie) =>
      movie.toLowerCase().includes(value)
    );

    setMovies(filteredMovies);
  };

  return (
    <div className='search'>
      <div style={{  paddingTop:'100px',paddingLeft: '1000px',paddingBottom:'30px' }}>
      <h4>Recommended movies</h4>
        <Link to="/search">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP._RTO9yp1xH5aQA0vS7fpHAHaHW&pid=Api&P=0&h=180"
            alt="Icon"
            style={{
              width: '60px',
              height: '60px',
              marginLeft: '80px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
            onClick={handleSearchIconClick}
          />
        </Link>

        {isSearchBarVisible && (
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: '10px',
              width: '70%',
              marginTop: '20px',
              marginLeft: '20px',
            }}
          />
        )}

        {searchTerm && (
          <ul>
            {movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        )}
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.I0qfPNNxqqjH_58HNUUwpQHaIL&pid=Api&P=0&h=180"
          alt="Icon"
          style={{
            width: '60px',
            height: '60px',
            marginLeft: '80px',
            marginTop: '20px',
          }}
        />
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.dLRz9KW1vDkLj0pia2rmJgHaHa&pid=Api&P=0&h=180"
          alt="Icon"
          style={{
            width: '60px',
            height: '60px',
            marginLeft: '80px',
            marginTop: '20px',
            marginRight:'100px'
          }}
        />
        <button onClick={handleLoginClick} >
          <Link to="/login1"></Link>
        <img src="https://tse3.mm.bing.net/th?id=OIP.9BO-GNSmyx19NqbhsSUn8wHaCd&pid=Api&P=0&h=180"
        alt="Icon"
        style={{
          width: '200px',
          height: '60px',
          
        }}
        
        />

        </button>
      </div>
      {/* Move ProfileList outside the padding */}
    </div>
  );
};

export default MoviesPage;

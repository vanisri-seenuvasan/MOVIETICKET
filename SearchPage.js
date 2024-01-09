import React, { useState } from 'react';
import './SearchPage.css';
const SearchPage = () => {
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
  const backgroundImageUrl='https://www.drevio.com/wp-content/uploads/2018/10/movie-ticket.jpg';
  const searchstyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    width:'2000px'
   
  };

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredMovies = initialMovies.filter((movie) =>
      movie.toLowerCase().includes(value)
    );

    setMovies(filteredMovies);
  };

  return (
    <>
      <div id="search" style={searchstyle}>
        <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" />

          <g className="magnifier">
            <circle className="glass" />
            <line className="handle" x1="32" y1="32" x2="44" y2="44"></line>
          </g>

          <g className="sparks">
            <circle className="spark" />
            <circle className="spark" />
            <circle className="spark" />
          </g>

          <g className="burst pattern-one">
            <circle className="particle circle" />
            <path className="particle triangle" />
            <circle className="particle circle" />
            <path className="particle plus" />
            <rect className="particle rect" />
            <path className="particle triangle" />
          </g>
          <g className="burst pattern-two">
            <path className="particle plus" />
            <circle className="particle circle" />
            <path className="particle triangle" />
            <rect className="particle rect" />
            <circle className="particle circle" />
            <path className="particle plus" />
          </g>
          <g className="burst pattern-three">
            <circle className="particle circle" />
            <rect className="particle rect" />
            <path className="particle plus" />
            <path className="particle triangle" />
            <rect className="particle rect" />
            <path className="particle plus" />
          </g>
        </svg>
        <input type="search" name="q" aria-label="Search for inspiration" placeholder="Search for a movie..." value={searchTerm} onChange={handleSearchChange} />
      </div>

      {searchTerm && (
        <div id="results" >
          <ul style={{color:'white'}}>
            {movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <SearchPage />
    </>
  );
};

export default App;

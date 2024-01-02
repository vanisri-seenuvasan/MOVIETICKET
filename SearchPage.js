import React, { useState } from 'react';

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
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <ul>
          {movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;

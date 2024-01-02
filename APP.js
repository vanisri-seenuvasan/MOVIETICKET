import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesPage from './MoviesPage';
import Welcome from './Welcome';
import FooterIcons from './FooterIcons';
import SearchPage from './SearchPage';
import ProfileList from './ProfileList';
import Login from './Login';
import Register from './Register';
import Calendar from './Calendar';
import MovieBookingPage from './MovieBooking';
import SeatLayout from './SeatLayout';
import Timer from './Timer';
import PaymentMethod from './PaymentMethods';
import Movie1 from './movie1';
import Movie2 from './movie2';
import Movie3 from './movie3';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Welcome/></div>} />
        <Route path="/movies" element={<div><MoviesPage/><ProfileList/></div>} />
        <Route path="/movie1" element={<Movie1/>}/>
        <Route path="/movie2" element={<Movie2/>}/>
        <Route path="/movie3" element={<Movie3/>}/>
        <Route path="/seat" element={<SeatLayout/>}/>
        
        <Route path="/booking" element={<MovieBookingPage/>}/>
        <Route path="/Calendar" element={<Calendar/>}/>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<FooterIcons />} />
        <Route path="/time" element={<Timer/>}/>
        <Route path="/gpay" element={<PaymentMethod/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;

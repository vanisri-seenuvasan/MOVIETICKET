import React, { useState } from 'react';
import './Calendar.css';
import { Link } from 'react-router-dom';
const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState('2020');
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle functions for month and year selection
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Dummy data for days and dates (adjust based on your logic)
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = 31; // Replace with actual calculation

  // Render dates for the selected month
  const renderDates = () => {
    return Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const isSelected = day === selectedDate;

      return (
        <div
          key={day}
          className={`calendar__date${isSelected ? ' calendar__date--selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          <span>{day}</span>
        </div>
      );
    });
  };

  // Handle date click
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar">
      <div className="calendar__opts">
        <select name="calendar__month" id="calendar__month" value={selectedMonth} onChange={handleMonthChange}>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>

        <select name="calendar__year" id="calendar__year" value={selectedYear} onChange={handleYearChange}>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
        </select>
      </div>

      <div className="calendar__body">
        <div className="calendar__days">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="calendar__dates">
          {renderDates()}
        </div>
      </div>

      <div className="calendar__buttons">
        <button className="calendar__button calendar__button--grey">Back</button>
        <Link to="/booking">

        <button className="calendar__button calendar__button--primary">Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default Calendar;

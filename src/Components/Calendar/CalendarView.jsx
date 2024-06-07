import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';

const CalendarView = () => {
  const [bookings, setBookings] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    console.log('CalendarView rendered');
    // Mock bookings data
    const hardcodedBookings = [
      {
        date: normalizeDate(new Date(2024, 5, 5)), // June 5, 2024
        boat: "Big",
        session: "Morning"
      },
      {
        date: normalizeDate(new Date(2024, 6, 5)), // July 5, 2024
        boat: "Big",
        session: "Morning"
      },
      {
        date: normalizeDate(new Date(2024, 2, 5)), // March 5, 2024
        boat: "Big",
        session: "Morning"
      },
      {
        date: normalizeDate(new Date(2024, 5, 5)), // June 5, 2024
        boat: "Big",
        session: "Evening"
      },
      {
        date: normalizeDate(new Date(2024, 5, 6)), // June 6, 2024
        boat: "Big",
        session: "Morning"
      },
      {
        date: normalizeDate(new Date(2024, 10, 4)), // November 4, 2024
        boat: "Big",
        session: "Morning"
      },
      {
        date: normalizeDate(new Date(2024, 6, 8)), // July 8, 2024
        boat: "Small",
        session: "Evening"
      }
    ];
    setBookings(hardcodedBookings);
  }, []);

  const normalizeDate = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const normalizedDate = normalizeDate(date);

      const filteredBookings = bookings.filter(
        booking => booking.date.getTime() === normalizedDate.getTime()
      );

      return (
        <ul>
          {filteredBookings.map((booking, index) => (
            <li key={index}>
              {booking.boat} - {booking.session}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <h1>Bookings Calendar</h1>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={tileContent}
      />
    </div>
  );
};

export default CalendarView;

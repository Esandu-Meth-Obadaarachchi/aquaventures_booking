import React, { useState, useContext } from "react";
import "./CheckAvailability.css";
import { ShopContext } from '/Users/esanduobadaarachchi/Desktop/booking_app/frontend/src/Context/ShopContext.jsx';

const CheckAvailability = () => {
  const { selectedDate, selectedBoat, selectedSession } = useContext(ShopContext);
  const [isAvailable, setIsAvailable] = useState(null);

  const normalizeDate = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const checkAvailability = () => {
    console.log(selectedDate, selectedBoat, selectedSession);

    if (!selectedDate || !selectedBoat || !selectedSession) {
      setIsAvailable(null); // Set to null if any selection is missing
      return; // Exit early if selections are incomplete
    }

    const hardcodedBookings = [
      {
        date: normalizeDate(new Date(2024, 5, 5)), // June 5, 2024
        boat: "Big",
        session: "Morning"
      },
      {
        date: normalizeDate(new Date(2024, 5, 5)), // June 5, 2024
        boat: "Big",
        session: "Evening"
      }
    ];

    const normalizedSelectedDate = normalizeDate(selectedDate);

    const isBooked = hardcodedBookings.some(
      booking =>
        booking.date.getTime() === normalizedSelectedDate.getTime() && // Compare normalized dates
        booking.boat === selectedBoat &&
        booking.session === selectedSession
    );

    setIsAvailable(!isBooked);
  };

  const handleBooking = () => {
    alert("Booking confirmed!");
  };

  return (
    <div className="main_div">
      <button className="check_butt" onClick={checkAvailability}>CHECK AVAILABILITY</button>
      {isAvailable !== null && (
        <>
          <h1 className="text">{isAvailable ? "Available" : "Not Available"}</h1>
          <button className="book-now"
            onClick={handleBooking} 
            disabled={!isAvailable}
          >
            {isAvailable ? "Book Now" : "Unavailable"}
          </button>
        </>
      )}
    </div>
  );
};

export default CheckAvailability;

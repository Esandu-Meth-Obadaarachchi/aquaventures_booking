import "./DatePicker.css";
import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ShopContext } from '/Users/esanduobadaarachchi/Desktop/booking_app/frontend/src/Context/ShopContext.jsx';

const BoatBookingDatePicker = () => {
  const { selectedDate, setDate } = useContext(ShopContext);

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="date-picker">
      <h1>Select the date</h1>
      <div className="picker">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
}

export default BoatBookingDatePicker;

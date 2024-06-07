import React from "react";
import BoatBookingDatePicker from "../Components/DatePicker/DatePicker"; // Adjust the path if needed
import "./CSS/Booking.css";
import BoatSelect from "../Components/BoatSelect/BoatSelect";
import CheckAvailability from "../Components/CheckAvailability/CheckAvailability";
import SessionSelect from "../Components/SessionSelect/SessionSelect";

  
const Booking = () => {


  return (

    <div>
      <BoatBookingDatePicker/> 
      <BoatSelect/>
      <SessionSelect/>
      <CheckAvailability/>    
      
       
    </div>
  );
  
};

export default Booking;

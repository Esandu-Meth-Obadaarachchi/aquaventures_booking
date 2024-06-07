import React, { useContext } from 'react';
import './SessionSelect.css';
import { ShopContext } from '/Users/esanduobadaarachchi/Desktop/booking_app/frontend/src/Context/ShopContext.jsx';

const SessionSelect = () => {
  const { setSession } = useContext(ShopContext);

  const handleSessionChange = (e) => {
    setSession(e.target.value);
  };

  return (
    <div className='sessionselect'>
      <h1>Session Select</h1>
      <div className="sessionselect-fields">
        <select name="sessionSelect" id="sessionSelect" onChange={handleSessionChange}>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
    </div>
  );
}

export default SessionSelect;




import React, { useContext } from 'react';
import './BoatSelect.css';
import { ShopContext } from '/Users/esanduobadaarachchi/Desktop/booking_app/frontend/src/Context/ShopContext.jsx';

const BoatSelect = () => {
  const { setBoat } = useContext(ShopContext);

  const handleBoatChange = (e) => {
    setBoat(e.target.value);
  };

  return (
    <div className='boatselect'>
      <h1>Boat Select</h1>
      <div className="boatselect-fields">
        <select name="boatSelect" id="boatSelect" onChange={handleBoatChange}>
          <option value="Big">BIG BOAT</option>
          <option value="Small">SMALL BOAT</option>
        </select>
      </div>
    </div>
  );
};

export default BoatSelect;



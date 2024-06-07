import './App.css';


import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginSignup from './Pages/LoginSignup';

import Booking from './Pages/Booking';
import Viewing from './Pages/Viewing';


function App() {
  return (
    <div>
      <BrowserRouter>
   
        <Routes>

          <Route path="/booking" element={<Booking />} />
          <Route path="/" element={<LoginSignup />}/>
          <Route path="/viewing" element={<Viewing />} />

    
        </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;



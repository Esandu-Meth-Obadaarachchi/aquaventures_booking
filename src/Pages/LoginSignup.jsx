import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '/Users/esanduobadaarachchi/Desktop/booking_app/frontend/src/Context/ShopContext.jsx';

const LoginSignup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(ShopContext);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const sampleUsers = [
    { name: "Esandu", email: 'methobadaarachchi@yahoo.com', password: '123', role: 'admin' },
    { name: "Dinu", email: 'dinushaobadaarachchi@yahoo.com', password: '123', role: 'user' }
  ];

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = () => {
    const user = sampleUsers.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );
    if (user) {
      setUser({ name: user.name, email: user.email, role: user.role });
      if (user.role === 'admin') {
        navigate('/booking');
      } else {
        navigate('/viewing');
      }
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input
            type="email"
            placeholder='Email Address'
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;

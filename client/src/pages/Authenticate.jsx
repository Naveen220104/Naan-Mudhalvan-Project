import React, { useState } from 'react';
import '../styles/authenticate.css';
import Login from '../components/Login';
import Register from '../components/Register';
import { useNavigate } from 'react-router-dom';

const Authenticate = () => {
  const [authType, setAuthType] = useState('login');
  const navigate = useNavigate();

  return (
    <div className="AuthenticatePage">
      {/* Navigation Bar */}
      <div className="auth-navbar">
        <h3 onClick={() => navigate('/')}>Workify</h3>
        <p onClick={() => navigate('/')}>Home</p>
      </div>

      {/* Conditional Rendering for Login/Register */}
      {authType === 'login' ? (
        <Login setAuthType={setAuthType} />
      ) : (
        <Register setAuthType={setAuthType} />
      )}
    </div>
  );
};

export default Authenticate;

import React, { useState } from 'react';
import './Login.css';
import logo_gg from '../assets/logoGG.png';
import logo_m from '../assets/logoMic.png';
import logo_ap from '../assets/logoAP.png';


const Login = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Email: ' + email); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome back</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <a href="/accountpage"><button type="submit" className="continue-btn">Continue</button></a>

          <p className="account-text">You don't have an account? <a href="/signup">Sign in</a></p>

          <div className="or-container">
            <div className="or-line"></div>
            <span>OR</span>
            <div className="or-line"></div>
          </div>

          <div className="social-buttons">
            <button className="social-btn google-btn">
              <span>
              <img src={logo_gg} alt="SpeeZs Logo" className="App-logo-google" /></span> Continue with Google
            </button>
            <button className="social-btn microsoft-btn">
              <span>
              <img src={logo_m} alt="SpeeZs Logo" className="App-logo-microsoft"/></span> Continue with Microsoft
            </button>
            <button className="social-btn apple-btn">
              <span>
              <img src={logo_ap} alt="SpeeZs Logo" className="App-logo-apple"/></span> Continue with Apple
            </button>
          </div>
        </form>

        <div className="footer-links">
          <a href="/use">Use</a> | <a href="/privacy-policy">Private policy</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

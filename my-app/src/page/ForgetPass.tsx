import React, { useState } from 'react';
import './ForgetPass.css';

const ForgetPass = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Password reset link has been sent to ' + email);
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-box">
        <h2>Forgot Password</h2>
        <p>Please enter your email address to reset your password</p>

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

          <button type="submit" className="submit-btn">Send Reset Link</button>

          <div className="back-link">
            <a href="/login">Back to Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;

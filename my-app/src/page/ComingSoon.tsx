import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import './ComingSoon.css';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('We will notify you soon!');
  };

  return (
    <div className="ComingSoon">
      <h1>Coming Soon!</h1>
      <p>
        <span>We are currently making some improvements</span>
        <span>to our website!</span>
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Notify Me</button>
      </form>

      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          < FaFacebook size={40} color="#333" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          < FaInstagram size={40} color="#333" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          < FaTwitter size={40} color="#333" />
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
export {};
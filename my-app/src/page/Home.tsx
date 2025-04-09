import React from 'react';
import './Home.css';
import home_pic from '../assets/model1.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image">
         <img src={home_pic} alt="SpeeZs Logo" className="App-logo-google" />
        </div>
        <div className="home-text">
          <h2>Online makeup try-on</h2>
          <p>Welcome to our vibrant world of makeup! Here, you'll discover the latest trends, tips, and product guides from experts. Whether you're a beginner or a seasoned pro, we're here to help you shine in your own unique way. Let's explore together and turn every day into a work of art!</p>
          <a href="/signup"><button className="start-btn">START</button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;

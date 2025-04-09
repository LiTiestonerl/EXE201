import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <header className="main-header">
        <a href='/payment'><button className="upgrade-btn">Upgrade to Pro</button></a>
      </header>

      <section className="choose-style-section">
        <h2>Choose your style</h2>
        <div className="category-buttons">
          <button className="category-btn">All</button>
          <button className="category-btn">School</button>
          <button className="category-btn">Work</button>
          <button className="category-btn">Party</button>
          <button className="category-btn">Travel</button>
          <button className="category-btn">Dating</button>
          <button className="category-btn">See more</button>
        </div>

        <div className="style-cards-container">
          <div className="style-card">
            <img src="path_to_your_image1.jpg" alt="Glitter eyes" />
            <p>Glitter eyes</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image2.jpg" alt="Grunge style" />
            <p>Grunge style</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image3.jpg" alt="Abstract style eyes" />
            <p>Abstract style eyes</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image4.jpg" alt="Cat eye personality" />
            <p>Cat eye personality</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image1.jpg" alt="Glitter eyes" />
            <p>Glitter eyes</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image2.jpg" alt="Grunge style" />
            <p>Grunge style</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image3.jpg" alt="Abstract style eyes" />
            <p>Abstract style eyes</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image4.jpg" alt="Cat eye personality" />
            <p>Cat eye personality</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image1.jpg" alt="Glitter eyes" />
            <p>Glitter eyes</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image2.jpg" alt="Grunge style" />
            <p>Grunge style</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image3.jpg" alt="Abstract style eyes" />
            <p>Abstract style eyes</p>
            <span className="pro-badge">PRO</span>
          </div>
          <div className="style-card">
            <img src="path_to_your_image4.jpg" alt="Cat eye personality" />
            <p>Cat eye personality</p>
            <span className="pro-badge">PRO</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

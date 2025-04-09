import React from "react";
import "./Premium.css";
import logo2 from '../assets/logo2.png';

const Premium = () => {
  return (
    <div className="premium-container">
      <header className="premium-header">
      <img src={logo2} alt="SpeeZs Premium Logo" className="premium-logo" />
      </header>

      <section className="premium-intro">
        <h2>Enjoy SpeeZs to the fullest with the latest experiences</h2>
        <p>
          Experience the latest makeup designs and unlimited samples with video
          tutorials. Try 1 month for 0VND then 49000VND/month • Excluding VAT •
          Cancel anytime
        </p>
        <button className="premium-btn">Try 1 month for 0VND</button>
        <p className="discount-note">
          Or save money with a group or student package
        </p>
        <p className="reminder">
          We will remind you 7 days before your trial ends. Recurring billing.
          Restrictions apply.
        </p>
      </section>

      <section className="premium-packages">
        <h3>Choose the membership package that's right for you</h3>
        <div className="packages-container">
          <div className="package-card">
            <h4>Student</h4>
            <p>Monthly Package</p>
            <p>19000VND/month</p>
            <p>Try 1 month for 0VND</p>
            <button className="package-btn">Try 1 month for 0VND</button>
          </div>
          <div className="package-card">
            <h4>Individual</h4>
            <p>Monthly Package</p>
            <p>49000VND/month</p>
            <p>Try 1 month for 49000VND</p>
            <button className="package-btn">Try 1 month for 0VND</button>
          </div>
          <div className="package-card">
            <h4>Group</h4>
            <p>Monthly Package</p>
            <p>99000VND/month</p>
            <p>Try 1 month for 99000VND</p>
            <button className="package-btn">Try 1 month for 0VND</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium;

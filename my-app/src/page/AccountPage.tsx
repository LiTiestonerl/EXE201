import React, { useState } from "react";
import "./AccountPage.css";
import PicProfile from "../assets/model1.jpg";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="account-page-container">
      <header className="account-header">
        <h2>My Account</h2>
      </header>

      <div className="account-body">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => handleTabSwitch("profile")}
          >
            Profile
          </button>
          <button
            className={`tab-button ${activeTab === "setting" ? "active" : ""}`}
            onClick={() => handleTabSwitch("setting")}
          >
            Setting
          </button>
        </div>

        {/* Profile Section */}
        {activeTab === "profile" && (
          <div className="profile-section">
            <div className="profile-header">
              <img src={PicProfile} />
              <p className="profile-name">Nining Abida</p>
            </div>

            <div className="profile-info">
              <label>Name</label>
              <input type="text" defaultValue="Nining Abida" />

              <label>Gender</label>
              <input type="text" defaultValue="Women" />

              <label>Birth of Date</label>
              <input type="text" defaultValue="1995-06-12" />

              <label>Phone Number</label>
              <input type="text" defaultValue="0896-xxx-xxx" />

              <label>Email</label>
              <input type="email" defaultValue="nng@mail.com" />

              <label>Social Media</label>
              <input type="text" defaultValue="Nining's Instagram" />
            </div>
          </div>
        )}

        {activeTab === "setting" && (
          <div className="setting-section">
            <div className="setting-item">
              <h4>My Profile</h4>
              <p>Edit your profile details.</p>
            </div>
            <div className="setting-item">
              <h4>Card / Bank Account</h4>
              <p>Manage your payment methods.</p>
            </div>
            <div className="setting-item">
              <h4>Help</h4>
              <p>Get assistance or contact support.</p>
            </div>
            <div className="setting-item">
              <h4>Tips and Trick</h4>
              <p>Learn how to get the most out of the app.</p>
            </div>
            <div className="setting-item">
              <h4>Guidelines Community</h4>
              <p>Understand the rules and guidelines of the community.</p>
            </div>
            <div className="setting-item">
              <h4>About Apps</h4>
              <p>Learn more about the application.</p>
            </div>
          </div>
        )}
        <a href="/login">
          <button className="logout-btn">Log Out</button>
        </a>
      </div>
    </div>
  );
};

export default AccountPage;

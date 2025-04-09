import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComingSoon from "./page/ComingSoon";
import Login from "./page/Login";
import Home from "./page/Home" ;
import Signup from './page/Register';
import Premium from "./page/Premium";
import "./App.css";
import logo from "./assets/logo_spe.png";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/">
              <img src={logo} alt="SpeeZs Logo" className="App-logo" />
            </Link>
            SpeeZs
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/coming-soon">Coming Soon</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
export {};

import React, { useState } from 'react';
import './App.css';
import CatListing from './CatsListing';
import LoginPage from './Login';
import Dashboard from './Staff_Dashboard';
import RegisterPage from './Register';

function Home() {
  const [showListing, setShowListing] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleListing = () => {
    setShowListing(!showListing);
    setShowLogin(false);
    setShowRegister(false);
    setShowDashboard(false);
  }

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowListing(false);
    setShowRegister(false);
    setShowDashboard(false);
  }

  const toggleRegister = () => {
    setShowRegister(!showRegister);
    setShowListing(false);
    setShowLogin(false);
    setShowDashboard(false);
  }

  const handleShowDashboard = () => {
    setShowDashboard(true);
    setShowListing(false);
    setShowLogin(false);
    setShowRegister(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>The Pet Shelter</h1>
      </header>
      <main className="main">
        <div className="button-group">
          {!showDashboard && (
            <>
              <button className="cat-button" onClick={toggleListing}>Cat</button>
              <button className="register-button" onClick={toggleRegister}>Register</button>
              <button className="login-button" onClick={toggleLogin}>Login</button>
            </>
          )}
        </div>
        {showLogin ? (
          <LoginPage onLogin={handleShowDashboard} />
        ) :
          showListing ? ( <CatListing />
        ) :
          showRegister ?( <RegisterPage />
        ): null
        }
        {showDashboard && <Dashboard />}
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;


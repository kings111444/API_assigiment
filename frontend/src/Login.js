import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Staff_Dashboard';

export default function LoginPage({onLogin}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then(response => {
        alert("You have successfully logged in!")
        if(response.data.user.role === "staff"){
            setLoggedIn(true);
            onLogin();
      }})
      .catch(error => {
        console.error(error);
      });

  }

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>The Pet Shelter</h1>
      </header>
      <main className="main">
        <div className="login-page">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );
}
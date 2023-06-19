import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/register', { username, password , role })
      .then(response => {
        console.log(response)
        alert('Resgisteration is done')
      })
      .catch(error => {
        console.error(error);
      });

  }

  return (
    <div className="container">
      <header className="header">
        <h1>The Pet Shelter</h1>
      </header>
      <main className="main">
        <div className="register-page">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
            Role(only for staff):
              <input type="text" value={role} onChange={e => setRole(e.target.value)} />
            </label>
            <button className="Register-button" type="submit">Register</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );
}
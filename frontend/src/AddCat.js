import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function AddCat() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');
    const [weight, setWeight] = useState('');
    const [breed, setBreed] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3002/cat', { name,gender,age,color,weight,breed })
      .then(response => {
        alert("Cat data was successfully added")
      })
      .catch(error => {
        console.error(error);
        
      });

  }

  return (
    <div className="container">
      <header className="header">
        <h1>Staff</h1>
      </header>
      <main className="main">
        <div className="AddCat-page">
          <h2>Add Cat</h2>
          <form onSubmit={handleSubmit}>
          <label>
              Name:
              <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
              Gender:
              <input type="text" value={gender} onChange={e => setGender(e.target.value)} />
            </label>
            <label>
            Age:
              <input type="text" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            <label>
            Color:
              <input type="text" value={color} onChange={e => setColor(e.target.value)} />
            </label>
            <label>
            Weight:
              <input type="text" value={weight} onChange={e => setWeight(e.target.value)} />
            </label>
            <label>
            Breed:
              <input type="text" value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <button className="AddCat-button" type="submit">Add Cat</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );


}
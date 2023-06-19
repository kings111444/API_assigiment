import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function CatUpdate() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');
    const [weight, setWeight] = useState('');
    const [breed, setBreed] = useState('');
    const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3002/cat/', {id,name,gender,age,color,weight,breed })
      .then(response => {
        alert("Cat data was successfully updated")
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
          <h2>Edit Cat</h2>
          <form onSubmit={handleSubmit}>
          <label>
              ID:
              <input type="text" value={id} onChange={e => setId(e.target.value)} />
            </label>
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
            <button className="UpdateCat-button" type="submit">Update Cat</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );


}
import React, { useState, useEffect } from 'react';
import './Cats.css';
import axios from 'axios';

function GetCatId() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/cat/id')
      .then(response => response.data)
      .then(data => setCats(data.catIds))
      .catch(error => console.error(error));
  }, []);
 
  return (
    <div className="container">
      <header className="header">
        <h1>The Pet Shelter</h1>
      </header>
      <main className="main">
        <div className="cat-Id">
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {cats.map(cat => (
                <tr key={cat.id}>
                  <td>{cat.name}</td>
                  <td>{cat._id}</td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default GetCatId;
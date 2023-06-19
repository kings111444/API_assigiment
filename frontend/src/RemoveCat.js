import React, { useState} from 'react';
import './Cats.css';
import axios from 'axios';

export default function RemoveCat() {
    const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id)
    axios.delete('http://localhost:3002/cat/', {data : {id : id}})
    .then(response => {
        alert("Cat data was successfully removed")
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
        <div className="RemoveCat-page">
            <h2>Remove Cat</h2>
        <form onSubmit={handleSubmit}>
          <label>
              ID:
              <input type="text" value={id} onChange={e => setId(e.target.value)} />
            </label>
            <button className="DeleteCat-button" type="submit">Delete Cat</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );
}

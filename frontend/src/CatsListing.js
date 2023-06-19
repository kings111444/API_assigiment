import React, { useState, useEffect } from 'react'
import './Cats.css'
import axios from 'axios'

function CatListing () {
  const [cats, setCats] = useState([])
  const [searchValue, setSearchValue] = useState({
    name: undefined,
    gender: undefined
  })

  useEffect(() => {
    axios
      .get('http://localhost:3002/cat')
      .then(response => response.data)
      .then(data => setCats(data.cats))
      .catch(error => console.error(error))
  }, [])

  const handleSearch = () => {
    axios
      .get('http://localhost:3002/cat/search', { params: searchValue })
      .then(response => {
        console.log(response.data.cats)
        setCats(response.data.cats)
      })
      .catch(error => alert("Not search result. Please try different keyword."))
  }

  return (
    <div className='container'>
      <header className='header'>
        <h1>The Pet Shelter</h1>
      </header>
      <main className='main'>
        <div className='cat-listing'>
          <h2>Meet Our Cats</h2>
          <div className='search-bar'>
            <input
              type='text'
              value={searchValue.name}
              placeholder="Name"
              onChange={e => setSearchValue({ name: e.target.value })}
            />
            <input
              type='text'
              value={searchValue.gender}
              placeholder="Gender"
              onChange={e => setSearchValue({ gender: e.target.value })}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Color</th>
                <th>Weight</th>
                <th>Breed</th>
              </tr>
            </thead>
            <tbody>
              {cats.map(cat => (
                <tr key={cat.id}>
                  <td>{cat.name}</td>
                  <td>{cat.gender}</td>
                  <td>{cat.age} years</td>
                  <td>{cat.color}</td>
                  <td>{cat.weight}</td>
                  <td>{cat.breed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer className='footer'>
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default CatListing

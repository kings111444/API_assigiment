import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
  const [UserData,setUserData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/cat")
    .then(response => setUserData(response.data))
    .catch(error => console.log(error));
    
  },[])

  console.log(UserData)

  return(
    JSON.stringify(UserData)
    );


}

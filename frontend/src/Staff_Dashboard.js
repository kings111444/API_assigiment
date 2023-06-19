import React, { useState } from 'react';
import './Dashboard.css';
import AddCat from './AddCat';
import GetCatId from './GetCatId';
import CatUpdate from './UpdateCat';
import RemoveCat from './RemoveCat';

function Dashboard() {
  const [showAddCat, setShowAddCat] = useState(false);
  const [showCatId, setShowCatId] = useState(false);
  const [showCatUpdate, setShowCatUpdate] = useState(false);
  const [showRemoveCat, setShowRemoveCat] = useState(false);

  const toggleAddCat = () => {
    setShowAddCat(true);
    setShowCatId(false);
    setShowCatUpdate(false);
    setShowRemoveCat(false);
  };

  const toggleGetCatId = () => {
    setShowAddCat(false);
    setShowCatId(true);
    setShowCatUpdate(false);
    setShowRemoveCat(false);
  };

  const toggleCatUpdate = () => {
    setShowAddCat(false);
    setShowCatId(false);
    setShowCatUpdate(true);
    setShowRemoveCat(false);
  };

  const toggleRemoveCat = () => {
    setShowAddCat(false);
    setShowCatId(false);
    setShowCatUpdate(false);
    setShowRemoveCat(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Staff Page</h1>
      </header>
      <main className="main">
        <div className="button-group">
          <button className="dashboard-button add-cat" onClick={toggleAddCat}>
            Add Cat
          </button>
          <button className="dashboard-button edit-cat-data" onClick={toggleGetCatId}>
            Get Cat ID
          </button>
          <button className="dashboard-button edit-cat-data" onClick={toggleCatUpdate}>
            Edit Cat Data
          </button>
          <button className="dashboard-button delete-cat-data" onClick={toggleRemoveCat}>
            Delete Cat Data
          </button>
        </div>
        {showAddCat ? (
          <AddCat />
        ) : showCatId ? (
          <GetCatId />
        ) : showCatUpdate ? (
          <CatUpdate />
        ) : showRemoveCat ? (
          <RemoveCat />
        ) : null}
      </main>
      <footer className="footer">
        <p>&copy; 2023 The Pet Shelter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;


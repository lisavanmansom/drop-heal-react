import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const rt = "Rouwtaak"
  const sub = "Verder in verandering";
  const d = "Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.";

  // Inner component
  const Task3 = () => {
    return (
      <div>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task2">Go to Task 2</Link>
        <Link to="/task4">Go to Task 4</Link>
      </div>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <header>
      <h1>Introductie rouwtaken</h1>
      <Task3 /> {/* Rendering inner component */}
    </header>
  );
};

export default MyComponent;
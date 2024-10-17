import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const rt = "Rouwtaak"
  const sub = "Het verlies aanvaarden";
  const d = "Ontdek hoe je de realiteit van het verlies kunt omarmen.";

  // Inner component
  const Task1 = () => {
    return (
      <div>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task2">Go to Task 2</Link>
      </div>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <header>
      <h1>Introductie rouwtaken</h1>
      <Task1 /> {/* Rendering inner component */}
    </header>
  );
};

export default MyComponent;
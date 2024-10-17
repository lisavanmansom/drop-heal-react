import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const rt = "Rouwtaak"
  const sub = "Emotioneel verder gaan";
  const d = "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.";

  // Inner component
  const Task4 = () => {
    return (
      <div>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task3">Go to Task 3</Link>
        <Link to="/task3">Go to Task 4</Link>
      </div>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <header>
      <h1>Introductie rouwtaken</h1>
      <Task4 /> {/* Rendering inner component */}
    </header>
  );
};

export default MyComponent;
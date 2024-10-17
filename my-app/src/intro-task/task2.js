import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const rt = "Rouwtaak"
  const sub = "De pijn doorvoelen";
  const d = "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken.";

  // Inner component
  const Task2 = () => {
    return (
      <div>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task1">Go to Task 1</Link>
        <Link to="/task3">Go to Task 3</Link>
      </div>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <header>
      <h1>Introductie rouwtaken</h1>
      <Task2 /> {/* Rendering inner component */}
    </header>
  );
};

export default MyComponent;
import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowR from '../components/ArrowR.jsx';
import MeshgradBlue from '../components/Meshgrad-blue.jsx';

const Task = () => {
  const rt = "Rouwtaak 1"
  const sub = "Het verlies aanvaarden";
  const d = "Ontdek hoe je de realiteit van het verlies kunt omarmen.";

  // Inner component
  const Task1 = () => {
    return (
      <article>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task2"><ArrowR /></Link>
        <MeshgradBlue />
      </article>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <section>
      <h1>Introductie rouwtaken</h1>
      <Task1 /> {/* Rendering inner component */}
    </section>
  );
};

export default Task;
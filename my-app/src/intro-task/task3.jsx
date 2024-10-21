import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowR from '../components/ArrowR.jsx';
import ArrowL from '../components/ArrowL.jsx';
import MeshgradGreen from '../components/Meshgrad-green.jsx';

const Task = () => {
  const rt = "Rouwtaak 3"
  const sub = "Verder in verandering";
  const d = "Vind jouw weg in een wereld die nu anders is door het verlies van je dierbare.";

  // Inner component
  const Task3 = () => {
    return (
      <article>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task2"><ArrowL /></Link>
        <Link to="/task4"><ArrowR /></Link>
        <MeshgradGreen />
      </article>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <section>
      <h1>Introductie rouwtaken</h1>
      <Task3 /> {/* Rendering inner component */}
    </section>
  );
};

export default Task;
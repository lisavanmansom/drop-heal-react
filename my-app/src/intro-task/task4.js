import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowR from '../components/ArrowR';
import ArrowL from '../components/ArrowL';
import MeshgradPink from '../components/Meshgrad-pink.js';

const Task = () => {
  const rt = "Rouwtaak 4"
  const sub = "Emotioneel verder gaan";
  const d = "Ontdek hoe je een nieuw pad kunt inslaan terwijl je het verlies een betekenisvolle plek geeft in je leven.";

  // Inner component
  const Task4 = () => {
    return (
      <article>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task3"><ArrowL /></Link>
        <Link to="/task3"><ArrowR /></Link>
        <MeshgradPink />
      </article>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <section>
      <h1>Introductie rouwtaken</h1>
      <Task4 /> {/* Rendering inner component */}
    </section>
  );
};

export default Task;
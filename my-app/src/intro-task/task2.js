import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowR from '../components/ArrowR';
import ArrowL from '../components/ArrowL';
import MeshgradRed from '../components/Meshgrad-red.js';

const Task = () => {
  const rt = "Rouwtaak 2"
  const sub = "De pijn doorvoelen";
  const d = "Sta jezelf toe om de pijn te voelen en leer om deze op jouw manier te verwerken.";

  // Inner component
  const Task2 = () => {
    return (
      <article>
        <h2>{rt}</h2>
        <h3>{sub}</h3>
        <p>{d}</p>
        <Link to="/task1"><ArrowL /></Link>
        <Link to="/task3"><ArrowR /></Link>
        <MeshgradRed />
      </article>
    );
  };

  // Return outer component's structure, w. inner component
  return (
    <section>
      <h1>Introductie rouwtaken</h1>
      <Task2 /> {/* Rendering inner component */}
    </section>
  );
};

export default Task;
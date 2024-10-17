import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Introh2() {
  return (
    <div>
      <h1>Intro h2</h1>
      <Link to="/task2">Go to Task 2</Link>
    </div>
  );
}

export default Introh2;
import './intro-a.css';
import React from 'react';
import { Link } from 'react-router-dom';

function IntroA1() {
  return (
    <div>
      <h1>Intro a1</h1>
      <Link to="/task2">Go to Task 2</Link>
    </div>
  );
}

export default IntroA1;
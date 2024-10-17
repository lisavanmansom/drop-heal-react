import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Task4() {
  return (
    <div>
      <h1>Task 4 Page</h1>
      <Link to="/task3">Go to Task 3</Link>
      <Link to="/task3">Go to Task 3</Link>
    </div>
  );
}

export default Task4;
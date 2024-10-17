import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Task2() {
  return (
    <div>
      <h1>Task 2 Page</h1>
      <Link to="/task1">Go to Task 1</Link>
      <Link to="/task3">Go to Task 3</Link>
    </div>
  );
}

export default Task2;
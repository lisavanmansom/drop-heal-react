import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Task1() {
  return (
    <div>
      <h1>Task 1 Page</h1>
      <Link to="/task2">Go to Task 2</Link>
    </div>
  );
}

export default Task1;
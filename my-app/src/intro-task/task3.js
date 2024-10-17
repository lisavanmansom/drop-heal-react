import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Task3() {
  return (
    <div>
      <h1>Task 3 Page</h1>
      <Link to="/task1">Go to Task 2</Link>
      <Link to="/task3">Go to Task 4</Link>
    </div>
  );
}

export default Task3;
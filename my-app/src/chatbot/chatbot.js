import './task.css';
import React from 'react';
import { Link } from 'react-router-dom';

function chatbot() {
  return (
    <div>
      <h1>Chatbot</h1>
      <Link to="/task2">Go to Task 2</Link>
    </div>
  );
}

export default chatbot;
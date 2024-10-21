import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskDetail from './intro-task/taskDetail';

function App() {
  return (
      <div className="App">
        <h1>Drop & Heal</h1>
        <Link to="/task/1">Introductie Rouwtaken</Link>
  
        <Routes>
          <Route path="/task/:id" element={<TaskDetail />} /> 
        </Routes>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskDetail from './intro-task/taskDetail';

function App() {
  return (
      <main>
        <h1 className="header">Drop & Heal</h1>
        <Link to="/task/1" className="header">Introductie Rouwtaken</Link>
  
        <Routes>
          <Route path="/task/:id" element={<TaskDetail />} /> 
        </Routes>
    </main>
  );
}

export default App;

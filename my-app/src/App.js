import './App.css';
import { Routes, Route } from 'react-router-dom';
import Task1 from './intro-task/task1';
import Task2 from './intro-task/task2';
import Task3 from './intro-task/task3';
import Task4 from './intro-task/task4';

function App() {
  return (
      <div className="App">
        <h1>test</h1>
        
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
        </Routes>
    </div>
  );
}

export default App;

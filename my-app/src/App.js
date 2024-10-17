import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './intro-task/task1';
import Task2 from './intro-task/task2';
import Task3 from './intro-task/task3';
import Task4 from './intro-task/task4';

function App() {
  return (
      <div className="App">
        <h1>test</h1>
        <nav>
          <ul>
            <li><Link to="/task1">Go to Task 1</Link></li>
            <li><Link to="/task2">Go to Task 2</Link></li>
            <li><Link to="/task3">Go to Task 3</Link></li>
            <li><Link to="/task4">Go to Task 4</Link></li>
          </ul>
        </nav>

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

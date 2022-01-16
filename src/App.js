import './App.css';
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-app">
      <TaskList/>
    </div>
  );
}

export default App;

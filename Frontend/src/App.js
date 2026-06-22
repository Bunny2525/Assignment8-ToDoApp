import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleTaskAdded = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div className="container">
      <h1>To-Do List App</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList refresh={refreshTrigger} />
    </div>
  );
}

export default App;
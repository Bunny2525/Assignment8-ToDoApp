import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => setRefresh(!refresh);

  return (
    <div>
      <h1>To-Do List App</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList refresh={refresh} />
    </div>
  );
}

export default App;

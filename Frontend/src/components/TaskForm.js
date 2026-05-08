import React, { useState } from 'react';
import { addTask } from '../api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTask({ title });
    setTitle('');
    onTaskAdded(); // trigger refresh in parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;

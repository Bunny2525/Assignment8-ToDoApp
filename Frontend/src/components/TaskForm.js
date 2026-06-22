import React, { useState } from 'react';
import api from '../api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    try {
      const res = await api.post('/', { title, description, priority, dueDate });
      onTaskAdded(res.data);
      
      setTitle('');
      setDescription('');
      setPriority('Low');
      setDueDate('');
    } catch (err) {
      setSubmitError(err.response?.data?.message || 'Failed to add task.');
    }
  };

  return (
    <div className="task-form-container">
      <h2>Add a New Task</h2>
      {submitError && <div className="error-banner">{submitError}</div>}
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit" className="btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
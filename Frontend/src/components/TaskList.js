import React, { useEffect, useState } from 'react';
import api from '../api';

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search

  const fetchTasks = async (query = '') => {
    try {
      setIsLoading(true);
      setFetchError(null);
      
      // If there's a search term, hit the search endpoint. Otherwise, get all tasks.
      const endpoint = query ? `/search?q=${query}` : '/';
      const res = await api.get(endpoint);
      setTasks(res.data);
    } catch (err) {
      setFetchError(err.response?.data?.message || 'Failed to fetch tasks.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(searchTerm);
  }, [refresh, searchTerm]); // Re-fetch when refresh triggers or search term changes

  // Function to toggle task completion
  const toggleComplete = async (task) => {
    try {
      await api.put(`/${task._id}`, { completed: !task.completed });
      fetchTasks(searchTerm); // Refresh the list after updating
    } catch (err) {
      alert('Failed to update task status.');
    }
  };

  // Function to delete a task
  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchTasks(searchTerm); // Refresh the list
    } catch (err) {
      alert('Failed to delete task.');
    }
  };

  return (
    <div className="task-list-container">
      <h2>Your Tasks</h2>
      
      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search tasks..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      {isLoading && <p className="loading-text">Loading tasks...</p>}
      {fetchError && <p className="error-banner">{fetchError}</p>}

      {!isLoading && tasks.length === 0 ? (
        <p className="empty-state">No tasks found.</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task._id} className={`task-item priority-${task.priority.toLowerCase()}`} style={{ opacity: task.completed ? 0.6 : 1 }}>
              <div className="task-header">
                <strong style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.title}
                </strong>
                <div>
                  <span className={`badge badge-${task.priority.toLowerCase()}`} style={{ marginRight: '10px' }}>{task.priority}</span>
                  
                  {/* Status and Delete Buttons */}
                  <button onClick={() => toggleComplete(task)} style={{ marginRight: '5px' }}>
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => handleDelete(task._id)} style={{ color: 'red' }}>
                    Delete
                  </button>
                </div>
              </div>
              {task.description && <p className="task-desc">{task.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
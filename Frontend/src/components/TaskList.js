import React, { useEffect, useState } from 'react';
import api from '../api';

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        setFetchError(null);
        
        const res = await api.get('/');
        setTasks(res.data);
      } catch (err) {
        setFetchError(err.response?.data?.message || 'Failed to fetch tasks.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [refresh]);

  if (isLoading) return <p className="loading-text">Loading tasks...</p>;
  if (fetchError) return <p className="error-banner">{fetchError}</p>;

  return (
    <div className="task-list-container">
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks found.</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task._id} className={`task-item priority-${task.priority.toLowerCase()}`}>
              <div className="task-header">
                <strong>{task.title}</strong>
                <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span>
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
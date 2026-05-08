import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, completeTask } from '../api';

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, [refresh]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const handleComplete = async (id) => {
    await completeTask(id);
    setTasks(tasks.map(task => task._id === id ? { ...task, completed: true } : task));
  };

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <span>{task.title} - {task.completed ? "✅" : "❌"}</span>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
          <button onClick={() => handleComplete(task._id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

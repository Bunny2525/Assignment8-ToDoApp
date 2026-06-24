import axios from 'axios';

const api = axios.create({ 
  baseURL: 'https://assignment8-backend-fee8.onrender.com/api/tasks' 
});

export default api;
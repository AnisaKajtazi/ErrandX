import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const taskService = {
  getAllTasks: async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  getTaskById: async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  createTask: async (task) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL, task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  updateTask: async (id, task) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/${id}`, task, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  deleteTask: async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};

export default taskService;

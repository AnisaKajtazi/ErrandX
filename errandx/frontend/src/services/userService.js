import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const userService = {
  register: async (userData) => {
    const response = await axios.post(API_URL, userData);
    if(response.data.token) localStorage.setItem('token', response.data.token);
    return response.data;
  },

  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if(response.data.token) localStorage.setItem('token', response.data.token);
    return response.data; 
  },

  getAllUsers: async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  getUserById: async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  updateUser: async (id, userData) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/${id}`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  },

  deleteUser: async (id) => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};

export default userService;

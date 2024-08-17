import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yourapi.com/api', // Replace with your API base URL
  timeout: 10000, // Set a timeout limit
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
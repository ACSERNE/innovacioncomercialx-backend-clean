import axios from 'axios';

const api = axios.create({
  baseURL: 'https://TU_BACKEND_URL', // reemplazar
  timeout: 10000,
});

export default api;

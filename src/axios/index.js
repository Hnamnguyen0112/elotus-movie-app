import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(async (config) => {
  config.headers['Content-type'] = 'application/json';
  return config;
});

export default instance;

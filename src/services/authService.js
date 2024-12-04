import api from './api';

const login = (credentials) => api.post('/auth/login', credentials);
const register = (userData) => api.post('/auth/register', userData);
const logout = () => api.post('/auth/logout');
const me = () => api.get('/auth/me');

export default {
  login,
  register,
  logout,
  me,
};
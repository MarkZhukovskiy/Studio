import { api } from './index';

export const getProjects = () => api.get('/projects');
export const createProject = (data) => api.post('/projects', data); 
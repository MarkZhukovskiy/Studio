import { api } from './index';

export const sendBrief = (data) => api.post('/brief', data); 
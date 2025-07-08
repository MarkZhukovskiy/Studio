import { api } from './index';

export const getReviews = () => api.get('/reviews');
export const createReview = (data) => api.post('/reviews', data); 
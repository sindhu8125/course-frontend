import api from './axiosConfig';

export const getAllMovies    = ()                => api.get('/movies');
export const addMovie        = (data)            => api.post('/movies', data);
export const updateMovie     = (id, data)        => api.put(`/movies/${id}`, data);
export const deleteMovie     = (id)              => api.delete(`/movies/${id}`);
export const filterMovies    = (params)          => api.get('/movies/filter', { params });
export const searchMovies    = (title)           => api.get('/movies/search', { params: { title } });
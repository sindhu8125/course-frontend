import { useState, useEffect } from 'react';
import { getAllMovies, addMovie, updateMovie, deleteMovie, filterMovies, searchMovies } from '../api/movieApi';

export function useMovies() {
  const [movies, setMovies]   = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    setLoading(true);
    const res = await getAllMovies();
    setMovies(res.data);
    setLoading(false);
  };

  useEffect(() => {
     fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const add    = async (data)        => { await addMovie(data);        fetchAll(); };
  const update = async (id, data)    => { await updateMovie(id, data); fetchAll(); };
  const remove = async (id)          => { await deleteMovie(id);       fetchAll(); };

  const filter = async (params) => {
    setLoading(true);
    const res = await filterMovies(params);
    setMovies(res.data);
    setLoading(false);
  };

  const search = async (title) => {
    if (!title) { fetchAll(); return; }
    setLoading(true);
    const res = await searchMovies(title);
    setMovies(res.data);
    setLoading(false);
  };

  return { movies, loading, add, update, remove, filter, search };
}
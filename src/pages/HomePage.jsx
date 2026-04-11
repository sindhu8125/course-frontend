import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import MovieForm from '../components/MovieForm';
import FilterBar from '../components/FilterBar';
import { useMovies } from '../hooks/useMovies';

export default function HomePage() {
  const { movies, loading, add, update, remove, filter, search } = useMovies();
  const [editing, setEditing]   = useState(null);
  const [showForm, setShowForm] = useState(false);

  if (loading) return <p style={{ textAlign: 'center', marginTop: 40 }}>Loading...</p>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>🎬 Movie Watchlist</h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditing(null); }}
          style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          {showForm ? 'Close' : '+ Add Movie'}
        </button>
      </div>

      {showForm && (
        <MovieForm
          onSubmit={(data) => { add(data); setShowForm(false); }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editing && (
        <MovieForm
          initial={editing}
          onSubmit={(data) => { update(editing.id, data); setEditing(null); }}
          onCancel={() => setEditing(null)}
        />
      )}

      <FilterBar onFilter={filter} onSearch={search} />

      <p style={{ color: '#6b7280', marginBottom: 16 }}>{movies.length} movie{movies.length !== 1 ? 's' : ''}</p>

      {movies.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#9ca3af', marginTop: 60 }}>No movies found. Add one!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 16 }}>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onEdit={() => { setEditing(movie); setShowForm(false); }}
              onDelete={() => remove(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
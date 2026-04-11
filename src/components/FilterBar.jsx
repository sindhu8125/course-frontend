import { useState } from 'react';

const genres   = ['', 'ACTION', 'COMEDY', 'DRAMA', 'HORROR', 'ROMANCE', 'SCIFI', 'THRILLER', 'ANIMATION', 'DOCUMENTARY'];
const statuses = ['', 'WATCHED', 'UNWATCHED', 'WATCHING'];

export default function FilterBar({ onFilter, onSearch }) {
  const [genre,  setGenre]  = useState('');
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    const params = {};
    if (genre)  params.genre  = genre;
    if (status) params.status = status;
    onFilter(params);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleReset = () => {
    setGenre(''); setStatus(''); setSearch('');
    onFilter({});
  };

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
      <input
        placeholder="Search by title..."
        value={search}
        onChange={handleSearch}
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', flex: 1 }}
      />
      <select value={genre} onChange={e => setGenre(e.target.value)}
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc' }}>
        <option value="">All Genres</option>
        {genres.filter(g => g).map(g => <option key={g} value={g}>{g}</option>)}
      </select>
      <select value={status} onChange={e => setStatus(e.target.value)}
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc' }}>
        <option value="">All Status</option>
        {statuses.filter(s => s).map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <button onClick={handleFilter}
        style={{ padding: '8px 16px', borderRadius: 6, background: '#3b82f6', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Filter
      </button>
      <button onClick={handleReset}
        style={{ padding: '8px 16px', borderRadius: 6, background: '#6b7280', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Reset
      </button>
    </div>
  );
}
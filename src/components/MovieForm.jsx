import { useState } from 'react';

const empty = { title: '', director: '', releaseYear: '', rating: '', description: '', genre: 'ACTION', status: 'UNWATCHED' };
const genres   = ['ACTION', 'COMEDY', 'DRAMA', 'HORROR', 'ROMANCE', 'SCIFI', 'THRILLER', 'ANIMATION', 'DOCUMENTARY'];
const statuses = ['WATCHED', 'UNWATCHED', 'WATCHING'];

export default function MovieForm({ initial = empty, onSubmit, onCancel }) {
  const [form, setForm] = useState(initial);
  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const inputStyle = { padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', width: '100%' };

  return (
    <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 10, padding: 24, marginBottom: 24 }}>
      <h3 style={{ marginTop: 0 }}>{initial.id ? 'Edit Movie' : 'Add Movie'}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <input placeholder="Title"       value={form.title}       onChange={set('title')}       style={inputStyle} />
        <input placeholder="Director"    value={form.director}    onChange={set('director')}    style={inputStyle} />
        <input placeholder="Release Year" value={form.releaseYear} onChange={set('releaseYear')} style={inputStyle} type="number" />
        <input placeholder="Rating (0-10)" value={form.rating}    onChange={set('rating')}      style={inputStyle} type="number" step="0.1" />
        <select value={form.genre}  onChange={set('genre')}  style={inputStyle}>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select value={form.status} onChange={set('status')} style={inputStyle}>
          {statuses.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <textarea placeholder="Description" value={form.description} onChange={set('description')}
          style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }} rows={3} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button onClick={() => onSubmit(form)}
          style={{ padding: '8px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Save
        </button>
        {onCancel && (
          <button onClick={onCancel}
            style={{ padding: '8px 20px', background: '#6b7280', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
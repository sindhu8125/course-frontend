const statusColors = {
  WATCHED:   { bg: '#dcfce7', color: '#166534' },
  UNWATCHED: { bg: '#fee2e2', color: '#991b1b' },
  WATCHING:  { bg: '#fef9c3', color: '#854d0e' },
};

export default function MovieCard({ movie, onEdit, onDelete }) {
  const { title, director, releaseYear, rating, description, genre, status } = movie;
  const badge = statusColors[status] || {};

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 20, background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ margin: '0 0 4px' }}>{title}</h3>
          <p style={{ margin: '0 0 4px', color: '#6b7280', fontSize: 14 }}>{director} • {releaseYear}</p>
        </div>
        <span style={{ background: badge.bg, color: badge.color, padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
          {status}
        </span>
      </div>
      <div style={{ display: 'flex', gap: 8, margin: '12px 0', flexWrap: 'wrap' }}>
        <span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>{genre}</span>
        <span style={{ background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>⭐ {rating}/10</span>
      </div>
      {description && <p style={{ color: '#4b5563', fontSize: 14, margin: '0 0 16px' }}>{description}</p>}
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={onEdit}
          style={{ padding: '6px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Edit
        </button>
        <button onClick={onDelete}
          style={{ padding: '6px 16px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
          Delete
        </button>
      </div>
    </div>
  );
}
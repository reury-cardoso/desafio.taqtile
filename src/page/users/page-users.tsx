import loadingRing from '../../assets/ring-resize.svg';
import './page-users.css';

export function PageUsers() {
  const { data, loading, error } = {
    data: {
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ],
    },
    loading: true,
    error: null,
  };

  if (loading) return <img src={loadingRing} alt="Loading"  className='loading-ring'/>;
  if (error) return <p>Error </p>;

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

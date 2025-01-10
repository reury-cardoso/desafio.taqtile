export function PageUsers() {
  const { data, loading, error } = {
    data: {
      users: [
        { id: 1, name: 'John Doe'},
        { id: 2, name: 'Jane Doe'},
      ]
    },
    loading: false,
    error: null,
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {data.users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
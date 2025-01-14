import './user-card.css';

interface UserCardProps {
  name: string;
  email: string;
  role: string;
}

export function UserCard({ name, email, role }: UserCardProps) {
  return (
    <div className='user-card'>
      <div className='user-card-div'>
        <img className='user-card-avatar' src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`} alt='Avatar' />
        <div className='user-card-info'>
          <h2 className='user-card-name'>{name.length > 16 ? `${name.substring(0, 16)}...` : name}</h2>
          <p className='user-card-email'>{email.length > 25 ? `${email.substring(0, 25)}...` : email}</p>
        </div>
      </div>
      <span className='user-card-role'>{role.toLocaleUpperCase()}</span>
    </div>
  );
}

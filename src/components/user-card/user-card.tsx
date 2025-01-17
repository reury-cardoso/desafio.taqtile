import { useLazyQuery } from '@apollo/client';
import { GET_USER_QUERY } from '../../graphql/queries';

import loadingCircles from '../../assets/bouncing-circles.svg';
import './user-card.css';
import { User } from '../../@types/get-users-query';

interface UserCardProps {
  userId: string;
  name: string;
  email: string;
  openModal: () => void;
  setSelectedUser: (user: User) => void;
}

export function UserCard({ userId, name, email, openModal, setSelectedUser }: UserCardProps) {
  const [fetchUser, { loading }] = useLazyQuery(GET_USER_QUERY, {
    onCompleted: (data) => {
      setSelectedUser(data.user);
      openModal();
    },
    onError: (error) => {
      alert(`Erro ao buscar usuário: ${error.message}`);
    },
  });

  const handleClick = () => {
    fetchUser({
      variables: {
        userId,
      },
    });
  };

  return (
    <div className='user-card'>
      <div className='user-card-div'>
        <img className='user-card-avatar' src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`} alt='Avatar' />
        <div className='user-card-info'>
          <h2 className='user-card-name'>{name}</h2>
          <p className='user-card-email'>{email}</p>
        </div>
      </div>
      <button className='user-card-details' onClick={handleClick}>
        {loading ? <img width={14} className='loading-circles' src={loadingCircles} alt='Carregando...' /> : 'Detalhes'}
      </button>
    </div>
  );
}

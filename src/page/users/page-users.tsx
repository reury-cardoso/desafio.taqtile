import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USERS_QUERY } from '../../graphql/queries';
import { GetUsersQueryVariables , UsersData } from '../../@types/get-users-query';

import { UserCard } from '../../components/user-card/user-card';
import loadingRing from '../../assets/ring-resize.svg';
import './page-users.css';

export function PageUsers() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const { loading, error, data, refetch } = useQuery<{users: UsersData}, {data: GetUsersQueryVariables }>(GET_USERS_QUERY, {
    variables: {
      data: {
        offset: currentPage * itemsPerPage,
        limit: itemsPerPage,
      },
    },
    onError: (error) => {
      if (error.message === 'Operação não autenticada.') {
        localStorage.removeItem('token');
        navigate('/auth');
      }
    },
  });

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    refetch({
      data: {
        offset: selected * itemsPerPage,
        limit: itemsPerPage,
      },
    });
  };

  if (loading) {
    return (
      <div className='loading-ring'>
        <img src={loadingRing} alt='Carregando...' />
      </div>
    );
  }

  if (error) {
    return (
      <p className='error-message'>
        Ocorreu um erro ao carregar os usuários.
        <br />
        {error.message}
      </p>
    );
  }

  if (!data) {
    return <p className='error-message'>Nenhum usuário encontrado.</p>;
  }

  const {
    users: { nodes, count },
  } = data;

  return (
    <div className='users-page'>
      <h1 className='users-heading'>Usuários</h1>

      <ul className='users-list'>
        {nodes.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} role={user.role} />
        ))}
      </ul>

      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        breakLabel='...'
        pageCount={Math.ceil(count / itemsPerPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        previousClassName='previous'
        nextClassName='next'
        disabledClassName='disabled'
        forcePage={currentPage}
      />
    </div>
  );
}

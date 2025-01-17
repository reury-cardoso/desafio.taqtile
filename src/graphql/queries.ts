import { gql } from '@apollo/client';

export const GET_USERS_QUERY = gql`
  query Query($data: PageInput) {
    users(data: $data) {
      nodes {
        id
        name
        email
        role
      }
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const GET_USER_QUERY = gql`
  query User($userId: ID) {
    user(id: $userId) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;

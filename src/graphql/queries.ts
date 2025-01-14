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

import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation Mutation($data: UserInput!) {
    createUser(data: $data) {
      name
      phone
      birthDate
      email
      role
    }
  }
`;

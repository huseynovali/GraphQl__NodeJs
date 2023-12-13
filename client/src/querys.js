import { gql } from "@apollo/client";

export const GET_Users = gql`
  query GetUsers {
    getUsers {
      _id
      username
      email
    }
  }
`;

export const GET_User = gql`
  query GetUser($userId: ID) {
    getUserById(userId: $userId) {
      _id
      username
      email
      videos {
        title
        description
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation CreateUser($body: Input) {
    createUser(body: $body) {
      _id
      username
      email
    }
  }
`;


export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $updateInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateInput: $updateInput) {
      _id
      username
      email
    }
  }
`;


export const DELETE_USER = gql`
  mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
      username
      email
    }
  }
`;